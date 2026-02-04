import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Myservices } from "./components/myservices/myservices";
import { SchoolResume } from "./components/school-resume/school-resume";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";
import { Techno } from "./components/techno/techno";
import { Icon } from "./components/icon/icon";

@Component({
  selector: 'app-root',
  imports: [Header, Main, Myservices, SchoolResume, Portfolio, Contact, Techno, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  protected title = 'portfolio-2026';
  isLoading = signal(true);
  private observer?: IntersectionObserver;
  private loaderTimeoutId?: number;
  private hasWindowLoaded = false;
  private hasMinLoaderDelayElapsed = false;
  private cursorMoveHandler?: (event: MouseEvent) => void;
  private cursorFrameId?: number;
  private cursorTarget = { x: 0, y: 0 };
  private cursorCurrent = { x: 0, y: 0 };

  ngOnInit(): void {
    const hideLoaderIfReady = () => {
      if (!this.hasWindowLoaded || !this.hasMinLoaderDelayElapsed) {
        return;
      }
      if (!this.isLoading()) {
        return;
      }
      this.isLoading.set(false);
      if (this.loaderTimeoutId) {
        clearTimeout(this.loaderTimeoutId);
        this.loaderTimeoutId = undefined;
      }
    };

    this.hasWindowLoaded = document.readyState === 'complete';

    this.loaderTimeoutId = window.setTimeout(() => {
      this.hasMinLoaderDelayElapsed = true;
      hideLoaderIfReady();
    }, 3000);

    if (this.hasWindowLoaded) {
      hideLoaderIfReady();
    } else {
      window.addEventListener(
        'load',
        () => {
          this.hasWindowLoaded = true;
          hideLoaderIfReady();
        },
        { once: true }
      );
    }
  }

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!elements.length) {
      this.setupCursorBubble();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => this.observer?.observe(element));
    this.setupCursorBubble();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.loaderTimeoutId) {
      clearTimeout(this.loaderTimeoutId);
    }
    if (this.cursorMoveHandler) {
      window.removeEventListener('mousemove', this.cursorMoveHandler);
    }
    if (this.cursorFrameId) {
      cancelAnimationFrame(this.cursorFrameId);
    }
  }

  private setupCursorBubble(): void {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const root = document.documentElement;
    const updatePosition = () => {
      const ease = 0.16;
      const dx = this.cursorTarget.x - this.cursorCurrent.x;
      const dy = this.cursorTarget.y - this.cursorCurrent.y;
      this.cursorCurrent.x += dx * ease;
      this.cursorCurrent.y += dy * ease;

      root.style.setProperty('--cursor-x', `${this.cursorCurrent.x}px`);
      root.style.setProperty('--cursor-y', `${this.cursorCurrent.y}px`);

      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
        this.cursorFrameId = requestAnimationFrame(updatePosition);
      } else {
        this.cursorFrameId = undefined;
      }
    };

    this.cursorMoveHandler = (event: MouseEvent) => {
      this.cursorTarget.x = event.clientX;
      this.cursorTarget.y = event.clientY;

      if (this.cursorCurrent.x === 0 && this.cursorCurrent.y === 0) {
        this.cursorCurrent.x = this.cursorTarget.x;
        this.cursorCurrent.y = this.cursorTarget.y;
      }

      const target = event.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        'a, button, .icon-card, .my-btn, .ghost-btn, .portfolio-card'
      );
      root.classList.toggle('cursor-active', isInteractive);

      if (!this.cursorFrameId) {
        this.cursorFrameId = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', this.cursorMoveHandler);
  }
}
