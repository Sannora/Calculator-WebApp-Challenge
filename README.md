Web challenge that I've completed using HTML, CSS and JavaScript that is a fully functional four-operations calculator with three separate display themes. Here is the link: https://golden-pudding-af0ec4.netlify.app/

 # ~ A Comprehensive Summary of Work Steps ~

- I've used a simple range type input range slider to simulate the theme switch slider in the HTML markup. Rest is simple HTML markup; divided in 3 separate sections respectively as Header, I/O and Keypad and a super-section to contain them all.

- CSS styling in the app consists of 3 main sections respectively general queries that contain the non-responsive elements of the parts (i.e. coloring, display types, font families etc.), desktop-responsive queries and mobile-responsive queries. Each section is divided in their respective HTML markup sections(Header, I/O and Keypad) each having separated for typography and element body stylings(The sectionings and separations I've made throughout the stylesheet are merely comment lines addressing which is which to grant readability to coding).

  > For theme switching, I've created CSS variables for each and every styles that is affected by the theme-switch to use them in JS scripts later on and also added 0.5 seconds of ``transition`` to make the switching look smoother.
  > Header section is a ``flexbox`` with a ``space-between`` justification of contents and the range slider with the indicators on top of it is another ``flexbox`` that its flex direction is a column to stack them on top of each other. To style the slider thumb I've used ``-webkit-slider-thumb`` pseudo-element selector.
  > I/O section is a div element with its text aligned to the end ``overflow`` is set to ``scroll`` and scrollbar set to ``display:none``. I've also placed a 0 placeholder to prevent the section's scaling to alter when an input occurs(This can also be achieved by putting a character with its ``visibility`` set to ``hidden`` but I did not find it necessary).
  > Keypad section consists of two ``grid`` layouts for 16 small buttons on the top of the keypad and 2 large "RESET" and "=" buttons on the bottom of the pad. I also set the ``box-sizing`` of the keypad to ``border-box`` to make the browser to account the padding values in its dimensions so it is easier to align the keypad's size with the rest of the sections. I also added ``0.1em`` of ``translateY`` transform to create an analog button pressing effect.

- I've divided the JS scripts to 3 main parts to implement a smiple divide and conquer method and also it reduces the confusion of all the scripts tangled in each other, aditionally it helped me roam the script file easily using simple navigation comment notes.

  > For starters, the theme switching scripts were the first things for me to handle. I've created two variables named ``themeRange`` and ``root`` to select the range slider and the root respectively. Then I've added a click event listener that invokes the ``updateRangeValue()`` function.
    >> ``updateRangeValue()`` function takes an ``element`` attribute which is the actual range slider. The variable range is incremented by the element's value which are the steps of range slider(0,50,100 (seen as 1,2,3 on app)). A simple ``case-switch`` structure that takes the range value handles the theme change directives respectively where each case has one theme's CSS variables held in ``setProperty()`` funtions.

  > Input scripts were the actual challenge for me. I've selected each of the buttons in keypad one by one to apply their unique function(Later I've noticed that there was an easier way to select them all using some CSS variables and regex but It was a little late for me to change so maybe in the future versions I will try that way. And also I've noticed that there was no need to select each numeric button since they have no unique functionalities. They are redundant, so I decided not to select them.).
    >> I've created a primary function ``logInput()`` which basically does all the work about logging an input(including deletion and reset) and a ``result`` variable that holds the whole arithmetic expression. For floating point number inputs, I've created a ``floatCheck`` boolean to prevent floating points occur more than once. This fashion is also implemented in ``operatorCheck`` boolean to prevent operators occur consecutively. For every input except the first numeric input, the value logged is incremented as a sting in the I/O section of the calculator.
    >> For deletion, I've declared a ``lengthCheck`` boolean variable to prevent the last placeholder 0 to be erased from display. For the rest, the result value is converted to an array and a ``pop()`` method is invoked to delete the most recent input. Then it is converted back to a string using ``join()`` method(method takes only "" to make the string a whole again without commas.).
    >> I've added a click event listener to delete button inside the ``logInput()`` function and it basically replaces everything inside the display with a 0 and resets the ``operatorCheck`` and ``floatCheck`` variables.

  > Finally, the calculation scripts part is made a single click event listener that basically replaces the "X" in the arithmetic expression with an asterisk symbol(Because that is the way the JavaScript handles the multiplication operation.) and writes it back in another variable called ``final``. Then it calculates the expression using a built-in ``eval()`` function that executes the calculation (``eval()`` function is not recommended because of data leaks and security breaches in websites but since it is a single function web-app and it is pretty much done to test my skills and publish it in GitHub I decided that it not that dangerous to use it. Also I will try to create my own ``eval()`` function either later on.).

Here are some screenshots:

Theme #1 Desktop view:

![desktop-view-theme1](https://github.com/Sannora/Calculator-WebApp-Challenge/assets/74245258/f27d2e37-175c-4f64-82c3-57407c0187e6)

Theme #2 Desktop view:

![desktop-view-theme2](https://github.com/Sannora/Calculator-WebApp-Challenge/assets/74245258/a924cfa3-1a29-4543-948d-f9bfd8ece16c)

Theme #3 Desktop view:

![desktop-view-theme3](https://github.com/Sannora/Calculator-WebApp-Challenge/assets/74245258/d8c27fee-ccf8-4f67-8cff-4c475331f766)

Theme #1 Mobile view:

![mobile-view-theme1](https://github.com/Sannora/Calculator-WebApp-Challenge/assets/74245258/308c86c8-e618-4a08-b3b8-35c6439d93a2)

Theme #2 Mobile view:

![mobile-view-theme2](https://github.com/Sannora/Calculator-WebApp-Challenge/assets/74245258/9da38edb-74b7-47da-90d6-266af5b1fc54)

Theme #3 Mobile view:

![mobile-view-theme3](https://github.com/Sannora/Calculator-WebApp-Challenge/assets/74245258/4b31149e-8979-4eb2-bac3-a7b91a3b754f)
