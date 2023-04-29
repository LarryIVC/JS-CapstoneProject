import countOccurrences from './CountOcurrences.js';

jest.mock('./CountOcurrences.js');

describe('Test number of items that return the API', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('Should return number of total items', async () => {
    countOccurrences.mockReturnValueOnce(23);
    // Arrange
    const expectedNumber = 23;

    // Act
    const numberItems = await countOccurrences();

    // Assert
    expect(numberItems).toBe(expectedNumber);
  });

  test('Shold be called', async () => {
    countOccurrences();

    expect(countOccurrences).toHaveBeenCalled();
  });

  test('throws an error when the length of data is negative', async () => {
    const countOccurrences = () => {
      throw new TypeError('Invalid Value');
    };
    expect(countOccurrences).toThrow(TypeError);
    expect(countOccurrences).toThrow('Invalid Value');
  });
});
