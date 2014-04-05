###Version 0.0
- Followed tutorial from [http://catlikecoding.com/unity/tutorials/runner/](http://catlikecoding.com/unity/tutorials/runner/)
- Changed some part of the code to remove GUIText showing on boost and distance counter - in file GUIManager, add:
 - under Start:

    `boostsText.enabled = false;`  
    `distanceText.enabled = false;`  

 - under GameStart:

    `boostsText.enabled = true;`  
    `distanceText.enabled = true;`  