const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      const catagories = []
      const result = mergeCategories(template, catagories, 'li')
      expect(result).to.contain('<div>')
      expect(result).to.contain('</div>')
      expect(result).to.contain('<ul>')
      expect(result).to.contain('</ul>')
      expect(result).to.not.contain('<li>')
      expect(result).to.not.contain('</li>')
    });

    it("should return a single <li> for one category", () => {
      const catagories = ['1']
      const result = mergeCategories(template, catagories, 'li')
      expect(result).to.contain('<div>')
      expect(result).to.contain('</div>')
      expect(result).to.contain('<ul>')
      expect(result).to.contain('</ul>')
      expect(result).to.contain('<li>1</li>')

    });

    it("should return an <li> for each category", () => {
      const catagories = ['1', '2']
      const result = mergeCategories(template, catagories, 'li')
      expect(result).to.contain('<div>')
      expect(result).to.contain('</div>')
      expect(result).to.contain('<ul>')
      expect(result).to.contain('</ul>')
      expect(result).to.contain('<li>1</li>')
      expect(result).to.contain('<li>2</li>')
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      expect.fail('please write this test');
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
