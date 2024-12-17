import {HelloWorld} from '../src/components/HelloWorld';

describe('Explorer', () => {
    test('Hello World returns a DIV Element', () => {
        const helloWorld = HelloWorld({text: 'Test'});
        expect(helloWorld).toBeInstanceOf(Object);
    });
});
