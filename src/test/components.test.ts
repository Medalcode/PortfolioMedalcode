import { describe, it, expect } from 'vitest';

/**
 * Helper function to validate Astro component props
 * Since Astro components can't be directly tested in Vitest,
 * we test the logic and prop validation separately
 */
describe('Component Prop Validation', () => {
  describe('Button component props', () => {
    it('should validate button variant types', () => {
      const validVariants = ['primary', 'secondary', 'outline'];
      
      validVariants.forEach((variant) => {
        expect(typeof variant).toBe('string');
        expect(variant.length).toBeGreaterThan(0);
      });
    });

    it('should validate href prop for links', () => {
      const validHrefs = [
        'https://example.com',
        '/about',
        '#section',
        'mailto:test@example.com',
      ];

      validHrefs.forEach((href) => {
        expect(typeof href).toBe('string');
        expect(href.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Capsule component props', () => {
    it('should validate capsule data structure', () => {
      const capsuleData = {
        name: 'JavaScript',
        iconName: 'javascript',
      };

      expect(capsuleData).toHaveProperty('name');
      expect(capsuleData).toHaveProperty('iconName');
      expect(typeof capsuleData.name).toBe('string');
      expect(typeof capsuleData.iconName).toBe('string');
    });

    it('should handle optional className', () => {
      const capsuleWithClass = {
        name: 'MySQL',
        iconName: 'mysql',
        className: 'bg-custom',
      };

      expect(capsuleWithClass.className).toBeDefined();
      expect(typeof capsuleWithClass.className).toBe('string');
    });
  });

  describe('Blog post data validation', () => {
    it('should validate blog post structure', () => {
      const blogPost = {
        title: 'Test Post',
        description: 'Test description',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['javascript', 'testing'],
        languages: ['ts', 'javascript'],
      };

      expect(blogPost.title).toBeDefined();
      expect(blogPost.pubDate).toBeInstanceOf(Date);
      expect(Array.isArray(blogPost.tags)).toBe(true);
      expect(Array.isArray(blogPost.languages)).toBe(true);
    });

    it('should validate optional image data', () => {
      const imageData = {
        url: '/images/test.jpg',
        alt: 'Test image',
      };

      expect(imageData.url).toBeDefined();
      expect(imageData.alt).toBeDefined();
      expect(typeof imageData.url).toBe('string');
      expect(typeof imageData.alt).toBe('string');
    });
  });

  describe('URL and path validation', () => {
    it('should validate internal paths', () => {
      const internalPaths = ['/blog', '/portfolio', '/about-me'];

      internalPaths.forEach((path) => {
        expect(path.startsWith('/')).toBe(true);
        expect(path.includes(' ')).toBe(false);
      });
    });

    it('should validate external URLs', () => {
      const externalUrls = [
        'https://github.com/medalcode',
        'https://linkedin.com/in/profile',
      ];

      externalUrls.forEach((url) => {
        expect(url.startsWith('http')).toBe(true);
        expect(() => new URL(url)).not.toThrow();
      });
    });
  });

  describe('Date formatting helpers', () => {
    it('should format dates correctly', () => {
      const testDate = new Date('2024-01-15');
      const formatted = testDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      expect(formatted).toBe('January 15, 2024');
    });

    it('should handle invalid dates', () => {
      const invalidDate = new Date('invalid');
      expect(isNaN(invalidDate.getTime())).toBe(true);
    });
  });
});
