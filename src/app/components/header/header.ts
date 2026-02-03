import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, AfterViewInit, OnDestroy {
  show: boolean = false;
  activeLink = signal('home');
  theme: 'light' | 'dark' = 'dark';
  private sectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.theme = 'light';
    }
    this.applyTheme();
  }

  onClick() {
    this.show = !this.show;
  }


  onClickNav(value: string): void {
    this.activeLink.set(value);
    this.show = false;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }

  ngAfterViewInit(): void {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) {
          return;
        }

        const mostVisible = visible.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );
        const id = mostVisible.target.id;

        if (id && this.activeLink() !== id) {
          this.activeLink.set(id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-30% 0px -50% 0px'
      }
    );

    sections.forEach((section) => this.sectionObserver?.observe(section));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }
}
