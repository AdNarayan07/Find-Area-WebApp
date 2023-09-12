// JavaScript class definition for shape calculations
class ShapeCalculator {
    static calculateRectangleArea(length, breadth) {
        return length * breadth;
    }

    static calculateCircleArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    static calculateTriangleAreaBH(base, height) {
        return 0.5 * base * height;
    }
    static calculateTriangleAreaAS(a, b, c) {
        let s = (a+b+c)/2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    static calculateParallelogramAreaBH(base, height) {
        return base * height;
    }
    static calculateParallelogramAreaAS(length, breadth, angle) {
        return length*breadth*Math.sin(angle * Math.PI / 180);
    }
    static calculateKiteAreaD(d1, d2) {
        return d1 * d2;
    }
    static calculateKiteAreaAS(s1, s2, angle) {
        return s1*s2*Math.sin(angle * Math.PI / 180);
    }
    static calculateTrapeziumArea(s1, s2, distance) {
        return (s1+s2)*distance/2;
    }
}

// Function to activate a tab
function activateTab(id) {
        document.getElementById(id).addEventListener('click', () => {
            setActiveTab(id);
            document.getElementById('result').textContent = '';
        });
    }

// Function to update the active tab
function setActiveTab(tabId) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
        button.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    // Show/hide input fields based on selected tab
    const inputFields = document.getElementsByClassName(`inputDiv`);
    for(let i=0; i<inputFields.length; i++){
        inputFields[i].style.display = "none";
    }

    const activeInputFields = document.getElementsByClassName(`${tabId}`);
    for(let i=0; i<activeInputFields.length; i++){
        myinputFields[i].style.display = "inline-block";
    }
}

//setting Active tab
activateTab("rectangleTab");
activateTab("circleTab");
activateTab("triangleBH");
activateTab("triangleAS");
activateTab("parallelogramBH");
activateTab("parallelogramAS");
activateTab("kiteD");
activateTab("kiteAS");
activateTab("trapezium");

// Event listener for the "Calculate Area" button
document.getElementById('calculateButton').addEventListener('click', () => {
    const activeTabId = document.querySelector('.tab-button.active').id;
    const resultDiv = document.getElementById('result');

// Using try-catch-finally to handle errors and clearing inpur fields
    try {
        let area;

// Using switch statement to return the area of selected shape
        switch (activeTabId) {
            case 'rectangleTab':
                const length = parseFloat(document.getElementById('length').value);
                const breadth = parseFloat(document.getElementById('breadth').value);
                if (isNaN(length) || isNaN(breadth)) {
                    throw new Error('Please enter valid length and breadth.');
                }
                area = ShapeCalculator.calculateRectangleArea(length, breadth);
                break;
            case 'circleTab':
                const radius = parseFloat(document.getElementById('radius').value);
                if (isNaN(radius)) {
                    throw new Error('Please enter a valid radius.');
                }
                area = ShapeCalculator.calculateCircleArea(radius);
                break;
            case 'triangleBH':
                const base = parseFloat(document.getElementById('base').value);
                const height = parseFloat(document.getElementById('height').value);
                if (isNaN(base) || isNaN(height)) {
                    throw new Error('Please enter valid base and height values.');
                }
                area = ShapeCalculator.calculateTriangleAreaBH(base, height);
                break;

            case 'triangleAS':
                const a = parseFloat(document.getElementById('a').value);
                const b = parseFloat(document.getElementById('b').value);
                const c = parseFloat(document.getElementById('c').value);
                if (isNaN(a) || isNaN(b) || isNaN(c)) {
                    throw new Error('Please enter valid values of sides of the triangle.');
                }
                area = ShapeCalculator.calculateTriangleAreaAS(a, b, c);
                break;
            case 'parallelogramBH':
                const baseL = parseFloat(document.getElementById('baseL').value);
                const heightL = parseFloat(document.getElementById('heightL').value);
                if (isNaN(baseL) || isNaN(heightL)) {
                    throw new Error('Please enter valid base and height values.');
                }
                area = ShapeCalculator.calculateParallelogramAreaBH(baseL, heightL);
                break;

            case 'parallelogramAS':
                const lengthL = parseFloat(document.getElementById('lengthL').value);
                const breadthL = parseFloat(document.getElementById('breadthL').value);
                const angle = parseFloat(document.getElementById('angle').value);
                if (isNaN(lengthL) || isNaN(breadthL) || isNaN(angle)) {
                    throw new Error('Please enter valid values of sides of the triangle.');
                }
                area = ShapeCalculator.calculateParallelogramAreaAS(lengthL, breadthL, angle);
                break;
            case 'kiteD':
                const d1 = parseFloat(document.getElementById('d1').value);
                const d2 = parseFloat(document.getElementById('d2').value);
                if (isNaN(d1) || isNaN(d2)) {
                    throw new Error('Please enter valid base and height values.');
                }
                area = ShapeCalculator.calculateKiteAreaD(d1, d2);
                break;

            case 'kiteAS':
                const s1 = parseFloat(document.getElementById('s1').value);
                const s2 = parseFloat(document.getElementById('s2').value);
                const angleK = parseFloat(document.getElementById('angleK').value);
                if (isNaN(s1) || isNaN(s2) || isNaN(angleK)) {
                    throw new Error('Please enter valid values of sides of the triangle.');
                }
                area = ShapeCalculator.calculateKiteAreaAS(s1, s2, angleK);
                break;

            case 'trapezium':
                const sT1 = parseFloat(document.getElementById('sT1').value);
                const sT2 = parseFloat(document.getElementById('sT2').value);
                const diff = parseFloat(document.getElementById('diff').value);
                if (isNaN(sT1) || isNaN(sT2) || isNaN(diff)) {
                    throw new Error('Please enter valid values of sides of the triangle.');
                }
                area = ShapeCalculator.calculateTrapeziumArea(sT1, sT2, diff);
                break;

            default:
                throw new Error('Invalid shape selected.');
        }
        resultDiv.textContent = `The area is: ${area.toFixed(2)}`;
    } catch (error) {
        console.log(error)
        resultDiv.textContent = `Error: ${error.message}`;
    } finally {
        const inputFields = document.querySelectorAll('.input-fields input');
        inputFields.forEach((input) => {
            input.value = '';
        });
    }
});

// Set the initial active tab to "Rectangle"
setActiveTab('rectangleTab');