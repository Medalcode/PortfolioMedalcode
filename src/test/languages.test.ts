import { describe, it, expect } from 'vitest';
import { getLanguage, languages } from '@shared/utils/languages';

describe('languages utility', () => {
  describe('languages object', () => {
    it('should contain all expected languages', () => {
      expect(languages).toBeDefined();
      expect(Object.keys(languages).length).toBeGreaterThan(0);
    });

    it('should have valid structure for each language', () => {
      Object.values(languages).forEach((lang) => {
        expect(lang).toHaveProperty('name');
        expect(lang).toHaveProperty('iconName');
        expect(typeof lang.name).toBe('string');
        expect(typeof lang.iconName).toBe('string');
      });
    });

    it('should have specific languages', () => {
      expect(languages.javascript).toBeDefined();
      expect(languages.typescript).toBeUndefined(); // It's 'ts' not 'typescript'
      expect(languages.ts).toBeDefined();
      expect(languages.react).toBeDefined();
      expect(languages.astro).toBeDefined();
    });

    it('should have correct data for TypeScript', () => {
      expect(languages.ts.name).toBe('TypeScript');
      expect(languages.ts.iconName).toBe('typescript');
    });

    it('should have correct data for Astro', () => {
      expect(languages.astro.name).toBe('Astro');
      expect(languages.astro.iconName).toBe('astro');
    });
  });

  describe('getLanguage function', () => {
    it('should return the correct language when it exists', () => {
      const jsLang = getLanguage('javascript');
      expect(jsLang.name).toBe('JavaScript');
      expect(jsLang.iconName).toBe('javascript');
    });

    it('should return HTML as fallback for unknown languages', () => {
      const unknownLang = getLanguage('unknown-language');
      expect(unknownLang.name).toBe('HTML 5');
      expect(unknownLang.iconName).toBe('html');
    });

    it('should handle empty string input', () => {
      const emptyLang = getLanguage('');
      expect(emptyLang.name).toBe('HTML 5');
    });

    it('should be case-sensitive', () => {
      const lowerCase = getLanguage('javascript');
      const upperCase = getLanguage('JavaScript');
      
      expect(lowerCase.name).toBe('JavaScript');
      expect(upperCase.name).toBe('HTML 5'); // Falls back because case doesn't match
    });

    it('should return languages with optional className', () => {
      const mysqlLang = getLanguage('mysql');
      expect(mysqlLang.className).toBeDefined();
      expect(mysqlLang.className).toBe('bg-[#f6ece1]!');
    });
  });
});
