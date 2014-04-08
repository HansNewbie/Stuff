Explanations could be found at [http://ideascomecheap.blogspot.com/search/label/Unity%20Endless%20Runner%20Tutorial](http://ideascomecheap.blogspot.com/search/label/Unity%20Endless%20Runner%20Tutorial)

###Version 0.3
- Added boost logo for better GUI

###Version 0.2
- Support Android

###Version 0.1
- Color change for the platform to be more intuitive; red for slow down, green for speed up and background color gradient for normal platform

###Version 0.0
- Followed tutorial from [http://catlikecoding.com/unity/tutorials/runner/](http://catlikecoding.com/unity/tutorials/runner/)
- Changed some part of the code to remove GUIText showing on boost and distance counter - in file GUIManager, add:
 - under Start:

    `boostsText.enabled = false;`  
    `distanceText.enabled = false;`  

 - under GameStart:

    `boostsText.enabled = true;`  
    `distanceText.enabled = true;`  