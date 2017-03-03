describe("JavaScript object map", () => {

    const buttonTypes = {
        cut: 'CUT',
        copy: 'COPY'
    };

    const buttonStates = {
        visible: 'VISIBLE',
        active: 'ACTIVE',
        disabled: 'DISABLED'
    };

    it("Should be an object holding keys and value for buttons and their state", () => {

        var jsMap = {};

        jsMap[buttonTypes.cut] = buttonStates.visible;
        jsMap[buttonTypes.copy] = buttonStates.visible;
        jsMap[buttonTypes.cut] = buttonStates.active;
        

        var expected = {  
            CUT: 'ACTIVE',
            COPY: 'VISIBLE'
        }

        expect(expected).toEqual(jsMap);
    });

});
