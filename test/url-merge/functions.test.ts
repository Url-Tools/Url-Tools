import {urlMerge} from "../../src";

describe('functions.ts', () => {
    test('should contain params when given 3 valid params', () => {

        // Arrange
        const baseUrl = "https://www.example.com/"
        const params = {
            test1: "value1",
            test2: "value2",
            test3: "value3",
        }
        // Act
        const result = urlMerge(baseUrl, params)

        // Assert
        expect(result).toContain(baseUrl);
        expect(result).toContain('test1=value1');
        expect(result).toContain('test2=value2');
        expect(result).toContain('test3=value3');
    })
})