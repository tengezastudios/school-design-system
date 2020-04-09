import React from 'react';



function HSLToRGB(h,s,l,a=1) {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

      if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
      } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
      }
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      console.log("rgba(" + r + "," + g + "," + b + "," + a + ")") 
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";    
}

function convertHSLtoRGB(hsl) {
  let hslArr = hsl.split(",");
  return HSLToRGB(hslArr[0], hslArr[1], hslArr[2], hslArr[3]);
}

function App() {
  return (
    <div className="App">
      <h1 style={{padding: '20px'}}>Color Pallete Implementation</h1>
      <section style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', alignContent: 'center', alignItems: 'center'}}>
        {
          colors.map( color => {
            return(
              <div key={color.tokenName} style={{
                width: '250px',
                height: '280px',
                margin: '10px',
                backgroundColor: convertHSLtoRGB(color.hslValue),
                boxShadow: '1px 1px 1px 1px rgba(0,0,0,0)',
                display: 'flex'
              }}>
                <h4 style={labelstyles}>{color.tokenName}</h4> <br />
                <p style={labelstyles}>{color.colorName}</p>
                </div>
            )
          })
        }
      </section>
     
      </div>

  );
}
const labelstyles = {
  margin: 'auto'
}
const colors = [
            {
              "tokenName": "$ui-background",
              "role": "Primary page background",
              "colorName": "White",
              "hslValue": "0,0,100"
            },
            {
              "tokenName": "$ui-01",
              "role": "Container background on $ui-background / Secondary page background",
              "colorName": "Gray 90",
              "hslValue": "0,0,90"
            },
            {
              "tokenName": "$ui-02",
              "role": "Container background on $ui-01 / Secondary page background",
              "colorName": "White",
              "hslValue": "0,0,100"
            },
            {
              "tokenName": "$ui-03",
              "role": "Subtle borders / Tertiary background color",
              "colorName": "Gray 80",
              "hslValue": "0,0,80"
            },
            {
              "tokenName": "$ui-04",
              "role": "Medium contrast border",
              "colorName": "Gray 50",
              "hslValue": "0,0,50"
            },
            {
              "tokenName": "$ui-05",
              "role": "High contrast border",
              "colorName": "Gray 10",
              "hslValue": "0,0,10"
            },
            {
              "tokenName": "$interactive-01",
              "role": "Primary interactive color / Primary buttons",
              "colorName": "Blue 50",
              "hslValue": "220,70,50"
            },
            {
              "tokenName": "$interactive-02",
              "role": "Secondary interactive color / Secondary buttons",
              "colorName": "Gray 20",
              "hslValue": "0,0,20"
            },
            {
              "tokenName": "$interactive-03",
              "role": "Tertiary button text color",
              "colorName": "Blue 50",
              "hslValue": "0,0,50"
            },
            {
              "tokenName": "$interactive-04",
              "role": "Selected elements / Active elements",
              "colorName": "Blue 50",
              "hslValue": "0,0,50"
            },
            {
              "tokenName": "$interactive-danger",
              "role": "Danger button background",
              "colorName": "Red 50",
              "hslValue": "357,76,50"
            },
            {
              "tokenName": "$focus",
              "role": "Focus borders / Focus underline",
              "colorName": "Blue 50",
              "hslValue": "220,70,50"
            },
            {
              "tokenName": "$disabled-01",
              "role": "Disabled fields / Disabled fields /",
              "colorName": "Gray 90",
              "hslValue": "0,0,90"
            },
            {
              "tokenName": "$disabled-02",
              "role": "Disabled buttons",
              "colorName": "Gray 70",
              "hslValue": "0,0,70"
            },
            {
              "tokenName": "$disabled-03",
              "role": "Disabled text on $disabled-02 / disabled icons on $disabled-02",
              "colorName": "Gray 50",
              "hslValue": "0,0,50"
            },
            {
              "tokenName": "$hover-primary",
              "role": "Hover for $interactive-01",
              "colorName": "Blue 60",
              "hslValue": "220,70,60"
            },
            {
              "tokenName": "$clicked-primary",
              "role": "Clicked for $interactive-01",
              "colorName": "Blue 40",
              "hslValue": "220,70,40"
            },
            {
              "tokenName": "$hover-secondary",
              "role": "Hover for $interactive-02",
              "colorName": "Gray 30",
              "hslValue": "0,0,30"
            },
            {
              "tokenName": "$clicked-secondary",
              "role": "Clicked for $interactive-02",
              "colorName": "Gray 10",
              "hslValue": "0,0,10"
            },
            {
              "tokenName": "$hover-tertiary",
              "role": "Hover for $interactive-03",
              "colorName": "Blue-60",
              "hslValue": "220,70,60"
            },
            {
              "tokenName": "$clicked-tertiary",
              "role": "Clicked for $interactive-03",
              "colorName": "Blue-40",
              "hslValue": "220,70,40"
            },
            {
              "tokenName": "$text-01",
              "role": "Primary text / Body copy / Headers / Hover text for $text-02",
              "colorName": "Gray 10",
              "hslValue": "0,0,10"
            },
            {
              "tokenName": "$text-02",
              "role": "Secondary text  / Input labels",
              "colorName": "Gray 30",
              "hslValue": "0,0,30"
            },
            {
              "tokenName": "$text-03",
              "role": "Placeholder text",
              "colorName": "Gray 70",
              "hslValue": "0,0,70"
            },
            {
              "tokenName": "$text-04",
              "role": "Text on interactive colors",
              "colorName": "White",
              "hslValue": "0,0,100"
            },
            {
              "tokenName": "$text-05",
              "role": "Tertiary text / Help text",
              "colorName": "Gray 50",
              "hslValue": "0,0,50"
            },
            {
              "tokenName": "$text-error",
              "role": "Error message text",
              "colorName": "Red 50",
              "hslValue": "0,0,60"
            },
            {
              "tokenName": "$link-01",
              "role": "Primary links / Ghost buttons",
              "colorName": "Blue 50",
              "hslValue": "220,70,50"
            },
            {
              "tokenName": "$field-01",
              "role": "Input fields for $ui-background",
              "colorName": "Gray 90",
              "hslValue": "0,0,90"
            },
            {
              "tokenName": "$field-02",
              "role": "Input fields for $ui-01",
              "colorName": "White",
              "hslValue": "0,0,100"
            },
            {
              "tokenName": "$overlay-01",
              "role": "Background overlay",
              "colorName": "Gray 10",
              "hslValue": "0,0,10,0.5"
            },
            {
              "tokenName": "$success-01",
              "role": "Success 1",
              "colorName": "Green 20",
              "hslValue": "138,64,20"
            },
            {
              "tokenName": "$success-02",
              "role": "Success 2",
              "colorName": "Green 40",
              "hslValue": "138,64,40"
            },
            {
              "tokenName": "$success-03",
              "role": "Success 3",
              "colorName": "Green 60",
              "hslValue": "138,64,60"
            },
            {
              "tokenName": "$warning-01",
              "role": "Warning 1",
              "colorName": "Yellow 40",
              "hslValue": "47,98,40"
            },
            {
              "tokenName": "$warning-02",
              "role": "Warning 2",
              "colorName": "Yellow 60",
              "hslValue": "47,98,60"
            },
            {
              "tokenName": "$warning-03",
              "role": "Warning 3",
              "colorName": "Yellow 80",
              "hslValue": "47,98,80"
            },
            {
              "tokenName": "$error-01",
              "role": "error-01",
              "colorName": "Red 30",
              "hslValue": "357,76,30"
            },
            {
              "tokenName": "$error-02",
              "role": "error-02",
              "colorName": "Red 50",
              "hslValue": "357,76,50"
            },
            {
              "tokenName": "$error-03",
              "role": "error-03",
              "colorName": "Red 70",
              "hslValue": "357,76,70"
            }
]

export default App;
