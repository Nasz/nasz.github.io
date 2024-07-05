---
title: "How to Translate Cities: Skylines II"
author: nasz
date: 2024-06-22 10:40:00 +0700
categories: [Localization, Mod]
tags: [Game, Mod, Unity, Howto]
exclude: true
---

# How to make translation Cities: Skylines II

This post use replace game support localization to you translate.

1. Browse game date location and goto localization path like "E:\SteamLibrary\steamapps\common\Cities Skylines II\Cities2_Data\StreamingAssets\Data~"
   ![image](https://github.com/Nasz/Nasz/assets/384751/634d274c-244a-4547-b74a-e4e60c91455d)

2. Download this tool aka "[asdfgh.py](https://forum.paradoxplaza.com/forum/threads/cities-skylines-ii-en-us-loc-help-me-open-the-translation-tools-to-play-in-turkish.1603585/post-29220130)" and place it into same directory.
   ![image](https://github.com/Nasz/Nasz/assets/384751/ed2a8d72-a3e2-49ae-99d9-c2d95688ca1e)

3. Install python with open cmd and type "python" and press "Enter" key. Then windows is popup Microsoft Store and click "Get" button.
   ![image](https://github.com/Nasz/Nasz/assets/384751/397d248b-3c14-4d68-9370-e4825b9d8bd5)

4. Back to game data find .loc that you want to replace and backup file. Ex: ru-RU.loc copy and paste to ru-RU.loc.back
   ![image](https://github.com/Nasz/Nasz/assets/384751/aed9418f-1332-4850-be64-9b55ff474cf6)

5. Open asdfgh.py and change line 40-41 to country code like
   ![image](https://github.com/Nasz/Nasz/assets/384751/2a599490-e65d-47f3-80c3-767ac987348b)

6. Change line 66-67 to your replace lang and soure like
   ![image](https://github.com/Nasz/Nasz/assets/384751/849be85f-67cb-4e84-8332-818c5602debd)

7. Run script with Terminal, first step script has create translate source file. open it and translate some text after equal sign.
   ![image](https://github.com/Nasz/Nasz/assets/384751/c7ab3ad1-b22e-4801-8f2a-a0d7912babc3)![image](https://github.com/Nasz/Nasz/assets/384751/138a98ac-442a-4669-8dd0-c004524801ec)

8. Back to Terminal and press Enter, script has generate new .loc file.
   ![image](https://github.com/Nasz/Nasz/assets/384751/99224111-9797-4f13-bfe3-c9b77ca121f6)

9. Open game to test and Teehee!
   ![image](https://github.com/Nasz/Nasz/assets/384751/9542bcc4-d00a-45bc-93af-0b9710a45108)

Have fun translating!
