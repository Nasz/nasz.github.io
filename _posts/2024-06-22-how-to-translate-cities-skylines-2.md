---
title: "How to Translate Cities: Skylines II"
author: nasz
date: 2024-06-22 10:40:00 +0700
categories: [Localization, Mod]
tags: [Game, Mod, Unity, Howto]
---
#How to make translation Cities: Skylines II 
This post use replace game support localization to you translate.
1. Browse game date location and goto localization path like "E:\SteamLibrary\steamapps\common\Cities Skylines II\Cities2_Data\StreamingAssets\Data~"
2. Download this tool aka "[asdfgh.py](https://forum.paradoxplaza.com/forum/threads/cities-skylines-ii-en-us-loc-help-me-open-the-translation-tools-to-play-in-turkish.1603585/post-29220130)" and place it into same directory.
3. Install python with open cmd and type "python" and press "Enter" key. Then windows is popup Microsoft Store and click "Get" button.
4. Back to game data find .loc that you want to replace and backup file. Ex: ru-RU.loc copy and paste to ru-RU.loc.back
5. Open asdfgh.py and change line 40-41 to country code like th-TH
6. Change line 66-77 to your replace lang and soure from line 41
7. Run script with Terminal, first step script has create translate source file. open it and translate some text after equal sign.
8. Back to Terminal and press Enter, script has generate new .loc file.
9. Open game to test and Teehee!

Have fun translating!
