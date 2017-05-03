/*:
 *
 * @plugindesc Increments/decrements certain Game Variables by a certain rate depending on a certain condition.
 * @author SumRndmDde
 *
 *
 * @param === Conditions ===
 * @desc This is just an organization Parameter.
 * Please leave it blank.
 * @default
 *
 * @param Default Condition
 * @desc The condition used for a Rate when one isn't explicitly set. Installation default is: true
 * @default true
 *
 * @param Global Condition
 * @desc An idependent condition used for all Rates. Ex: $gamePlayer.canMove() || $gameParty.inBattle()
 * @default $gamePlayer.canMove() || $gameParty.inBattle()
 *
 * @param ==== Location ====
 * @desc This is just an organization Parameter.
 * Please leave it blank.
 * @default
 *
 * @param Update on Map?
 * @desc If 'true', then the Variables will be updated on the map. They will not update when the menu is open, however.
 * @default true
 *
 * @param Update in Battle?
 * @desc If 'true', then the Variables will be updated during a battle. They won't update while selecting moves, however.
 * @default true
 *
 * @param ==== Rate 1  ====
 * @default
 *
 * @param Rate 1 Variables
 * @desc Input the Variables that are manipulated in Rate 1.
 * Example: 1, 2, 3
 * @default 1, 2, 3
 *
 * @param Rate 1 Speed
 * @desc Input the Speed for Rate 1.
 * Example: 1 per 60 frames
 * @default 1 per 60 frames
 *
 * @param Rate 1 Condition
 * @desc Input the specific JavaScript condition for Rate 1. View the Help section for more info. Leave blank for default.
 * @default s[1] == true
 *
 * @param Rate 1 Enabled?
 * @desc Input 'true' and Rate 1 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default false
 *
 * @param ==== Rate 2  ====
 * @default
 *
 * @param Rate 2 Variables
 * @desc Input the Variables that are manipulated in Rate 2.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 2 Speed
 * @desc Input the Speed for Rate 2.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 2 Condition
 * @desc Input the specific JavaScript condition for Rate 2. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 2 Enabled?
 * @desc Input 'true' and Rate 2 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 3  ====
 * @default
 *
 * @param Rate 3 Variables
 * @desc Input the Variables that are manipulated in Rate 3.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 3 Speed
 * @desc Input the Speed for Rate 3.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 3 Condition
 * @desc Input the specific JavaScript condition for Rate 3. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 3 Enabled?
 * @desc Input 'true' and Rate 3 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 4  ====
 * @default
 *
 * @param Rate 4 Variables
 * @desc Input the Variables that are manipulated in Rate 4.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 4 Speed
 * @desc Input the Speed for Rate 4.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 4 Condition
 * @desc Input the specific JavaScript condition for Rate 4. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 4 Enabled?
 * @desc Input 'true' and Rate 4 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 5  ====
 * @default
 *
 * @param Rate 5 Variables
 * @desc Input the Variables that are manipulated in Rate 5.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 5 Speed
 * @desc Input the Speed for Rate 5.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 5 Condition
 * @desc Input the specific JavaScript condition for Rate 5. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 5 Enabled?
 * @desc Input 'true' and Rate 5 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 6  ====
 * @default
 *
 * @param Rate 6 Variables
 * @desc Input the Variables that are manipulated in Rate 6.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 6 Speed
 * @desc Input the Speed for Rate 6.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 6 Condition
 * @desc Input the specific JavaScript condition for Rate 6. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 6 Enabled?
 * @desc Input 'true' and Rate 6 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 7  ====
 * @default
 *
 * @param Rate 7 Variables
 * @desc Input the Variables that are manipulated in Rate 7.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 7 Speed
 * @desc Input the Speed for Rate 7.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 7 Condition
 * @desc Input the specific JavaScript condition for Rate 7. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 7 Enabled?
 * @desc Input 'true' and Rate 7 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 8  ====
 * @default
 *
 * @param Rate 8 Variables
 * @desc Input the Variables that are manipulated in Rate 8.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 8 Speed
 * @desc Input the Speed for Rate 8.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 8 Condition
 * @desc Input the specific JavaScript condition for Rate 8. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 8 Enabled?
 * @desc Input 'true' and Rate 8 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 9  ====
 * @default
 *
 * @param Rate 9 Variables
 * @desc Input the Variables that are manipulated in Rate 9.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 9 Speed
 * @desc Input the Speed for Rate 9.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 9 Condition
 * @desc Input the specific JavaScript condition for Rate 9. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 9 Enabled?
 * @desc Input 'true' and Rate 9 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 10  ====
 * @default
 *
 * @param Rate 10 Variables
 * @desc Input the Variables that are manipulated in Rate 10.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 10 Speed
 * @desc Input the Speed for Rate 10.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 10 Condition
 * @desc Input the specific JavaScript condition for Rate 10. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 10 Enabled?
 * @desc Input 'true' and Rate 10 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 11  ====
 * @default
 *
 * @param Rate 11 Variables
 * @desc Input the Variables that are manipulated in Rate 11.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 11 Speed
 * @desc Input the Speed for Rate 11.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 11 Condition
 * @desc Input the specific JavaScript condition for Rate 11. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 11 Enabled?
 * @desc Input 'true' and Rate 11 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 12  ====
 * @default
 *
 * @param Rate 12 Variables
 * @desc Input the Variables that are manipulated in Rate 12.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 12 Speed
 * @desc Input the Speed for Rate 12.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 12 Condition
 * @desc Input the specific JavaScript condition for Rate 12. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 12 Enabled?
 * @desc Input 'true' and Rate 12 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 13  ====
 * @default
 *
 * @param Rate 13 Variables
 * @desc Input the Variables that are manipulated in Rate 13.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 13 Speed
 * @desc Input the Speed for Rate 13.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 13 Condition
 * @desc Input the specific JavaScript condition for Rate 13. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 13 Enabled?
 * @desc Input 'true' and Rate 13 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 14  ====
 * @default
 *
 * @param Rate 14 Variables
 * @desc Input the Variables that are manipulated in Rate 14.

 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 14 Speed
 * @desc Input the Speed for Rate 14.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 14 Condition
 * @desc Input the specific JavaScript condition for Rate 14. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 14 Enabled?
 * @desc Input 'true' and Rate 14 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 15  ====
 * @default
 *
 * @param Rate 15 Variables
 * @desc Input the Variables that are manipulated in Rate 15.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 15 Speed
 * @desc Input the Speed for Rate 15.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 15 Condition
 * @desc Input the specific JavaScript condition for Rate 15. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 15 Enabled?
 * @desc Input 'true' and Rate 15 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 16  ====
 * @default
 *
 * @param Rate 16 Variables
 * @desc Input the Variables that are manipulated in Rate 16.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 16 Speed
 * @desc Input the Speed for Rate 16.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 16 Condition
 * @desc Input the specific JavaScript condition for Rate 16. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 16 Enabled?
 * @desc Input 'true' and Rate 16 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 17  ====
 * @default
 *
 * @param Rate 17 Variables
 * @desc Input the Variables that are manipulated in Rate 17.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 17 Speed
 * @desc Input the Speed for Rate 17.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 17 Condition
 * @desc Input the specific JavaScript condition for Rate 17. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 17 Enabled?
 * @desc Input 'true' and Rate 17 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 18  ====
 * @default
 *
 * @param Rate 18 Variables
 * @desc Input the Variables that are manipulated in Rate 18.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 18 Speed
 * @desc Input the Speed for Rate 18.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 18 Condition
 * @desc Input the specific JavaScript condition for Rate 18. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 18 Enabled?
 * @desc Input 'true' and Rate 18 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 19  ====
 * @default
 *
 * @param Rate 19 Variables
 * @desc Input the Variables that are manipulated in Rate 19.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 19 Speed
 * @desc Input the Speed for Rate 19.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 19 Condition
 * @desc Input the specific JavaScript condition for Rate 19. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 19 Enabled?
 * @desc Input 'true' and Rate 19 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 20  ====
 * @default
 *
 * @param Rate 20 Variables
 * @desc Input the Variables that are manipulated in Rate 20.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 20 Speed
 * @desc Input the Speed for Rate 20.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 20 Condition
 * @desc Input the specific JavaScript condition for Rate 20. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 20 Enabled?
 * @desc Input 'true' and Rate 20 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 21  ====
 * @default
 *
 * @param Rate 21 Variables
 * @desc Input the Variables that are manipulated in Rate 21.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 21 Speed
 * @desc Input the Speed for Rate 21.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 21 Condition
 * @desc Input the specific JavaScript condition for Rate 21. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 21 Enabled?
 * @desc Input 'true' and Rate 21 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 22  ====
 * @default
 *
 * @param Rate 22 Variables
 * @desc Input the Variables that are manipulated in Rate 22.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 22 Speed
 * @desc Input the Speed for Rate 22.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 22 Condition
 * @desc Input the specific JavaScript condition for Rate 22. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 22 Enabled?
 * @desc Input 'true' and Rate 22 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 23  ====
 * @default
 *
 * @param Rate 23 Variables
 * @desc Input the Variables that are manipulated in Rate 23.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 23 Speed
 * @desc Input the Speed for Rate 23.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 23 Condition
 * @desc Input the specific JavaScript condition for Rate 23. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 23 Enabled?
 * @desc Input 'true' and Rate 23 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 24  ====
 * @default
 *
 * @param Rate 24 Variables
 * @desc Input the Variables that are manipulated in Rate 24.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 24 Speed
 * @desc Input the Speed for Rate 24.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 24 Condition
 * @desc Input the specific JavaScript condition for Rate 24. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 24 Enabled?
 * @desc Input 'true' and Rate 24 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 25  ====
 * @default
 *
 * @param Rate 25 Variables
 * @desc Input the Variables that are manipulated in Rate 25.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 25 Speed
 * @desc Input the Speed for Rate 25.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 25 Condition
 * @desc Input the specific JavaScript condition for Rate 25. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 25 Enabled?
 * @desc Input 'true' and Rate 25 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 26  ====
 * @default
 *
 * @param Rate 26 Variables
 * @desc Input the Variables that are manipulated in Rate 26.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 26 Speed
 * @desc Input the Speed for Rate 26.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 26 Condition
 * @desc Input the specific JavaScript condition for Rate 26. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 26 Enabled?
 * @desc Input 'true' and Rate 26 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 27  ====
 * @default
 *
 * @param Rate 27 Variables
 * @desc Input the Variables that are manipulated in Rate 27.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 27 Speed
 * @desc Input the Speed for Rate 27.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 27 Condition
 * @desc Input the specific JavaScript condition for Rate 27. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 27 Enabled?
 * @desc Input 'true' and Rate 27 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 28  ====
 * @default
 *
 * @param Rate 28 Variables
 * @desc Input the Variables that are manipulated in Rate 28.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 28 Speed
 * @desc Input the Speed for Rate 28.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 28 Condition
 * @desc Input the specific JavaScript condition for Rate 28. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 28 Enabled?
 * @desc Input 'true' and Rate 28 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 29  ====
 * @default
 *
 * @param Rate 29 Variables
 * @desc Input the Variables that are manipulated in Rate 29.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 29 Speed
 * @desc Input the Speed for Rate 29.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 29 Condition
 * @desc Input the specific JavaScript condition for Rate 29. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 29 Enabled?
 * @desc Input 'true' and Rate 29 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 30  ====
 * @default
 *
 * @param Rate 30 Variables
 * @desc Input the Variables that are manipulated in Rate 30.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 30 Speed
 * @desc Input the Speed for Rate 30.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 30 Condition
 * @desc Input the specific JavaScript condition for Rate 30. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 30 Enabled?
 * @desc Input 'true' and Rate 30 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
  * @param ==== Rate 31  ====
 * @default
 *
 * @param Rate 31 Variables
 * @desc Input the Variables that are manipulated in Rate 31.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 31 Speed
 * @desc Input the Speed for Rate 31.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 31 Condition
 * @desc Input the specific JavaScript condition for Rate 31. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 31 Enabled?
 * @desc Input 'true' and Rate 31 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 32  ====
 * @default
 *
 * @param Rate 32 Variables
 * @desc Input the Variables that are manipulated in Rate 32.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 32 Speed
 * @desc Input the Speed for Rate 32.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 32 Condition
 * @desc Input the specific JavaScript condition for Rate 32. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 32 Enabled?
 * @desc Input 'true' and Rate 32 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 33  ====
 * @default
 *
 * @param Rate 33 Variables
 * @desc Input the Variables that are manipulated in Rate 33.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 33 Speed
 * @desc Input the Speed for Rate 33.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 33 Condition
 * @desc Input the specific JavaScript condition for Rate 33. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 33 Enabled?
 * @desc Input 'true' and Rate 33 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 34  ====
 * @default
 *
 * @param Rate 34 Variables
 * @desc Input the Variables that are manipulated in Rate 34.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 34 Speed
 * @desc Input the Speed for Rate 34.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 34 Condition
 * @desc Input the specific JavaScript condition for Rate 34. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 34 Enabled?
 * @desc Input 'true' and Rate 34 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 35  ====
 * @default
 *
 * @param Rate 35 Variables
 * @desc Input the Variables that are manipulated in Rate 35.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 35 Speed
 * @desc Input the Speed for Rate 35.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 35 Condition
 * @desc Input the specific JavaScript condition for Rate 35. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 35 Enabled?
 * @desc Input 'true' and Rate 35 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 36  ====
 * @default
 *
 * @param Rate 36 Variables
 * @desc Input the Variables that are manipulated in Rate 36.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 36 Speed
 * @desc Input the Speed for Rate 36.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 36 Condition
 * @desc Input the specific JavaScript condition for Rate 36. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 36 Enabled?
 * @desc Input 'true' and Rate 36 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 37  ====
 * @default
 *
 * @param Rate 37 Variables
 * @desc Input the Variables that are manipulated in Rate 37.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 37 Speed
 * @desc Input the Speed for Rate 37.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 37 Condition
 * @desc Input the specific JavaScript condition for Rate 37. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 37 Enabled?
 * @desc Input 'true' and Rate 37 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 38  ====
 * @default
 *
 * @param Rate 38 Variables
 * @desc Input the Variables that are manipulated in Rate 38.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 38 Speed
 * @desc Input the Speed for Rate 38.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 38 Condition
 * @desc Input the specific JavaScript condition for Rate 38. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 38 Enabled?
 * @desc Input 'true' and Rate 38 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 39  ====
 * @default
 *
 * @param Rate 39 Variables
 * @desc Input the Variables that are manipulated in Rate 39.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 39 Speed
 * @desc Input the Speed for Rate 39.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 39 Condition
 * @desc Input the specific JavaScript condition for Rate 39. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 39 Enabled?
 * @desc Input 'true' and Rate 39 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 40  ====
 * @default
 *
 * @param Rate 40 Variables
 * @desc Input the Variables that are manipulated in Rate 40.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 40 Speed
 * @desc Input the Speed for Rate 40.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 40 Condition
 * @desc Input the specific JavaScript condition for Rate 40. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 40 Enabled?
 * @desc Input 'true' and Rate 40 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 41  ====
 * @default
 *
 * @param Rate 41 Variables
 * @desc Input the Variables that are manipulated in Rate 41.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 41 Speed
 * @desc Input the Speed for Rate 41.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 41 Condition
 * @desc Input the specific JavaScript condition for Rate 41. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 41 Enabled?
 * @desc Input 'true' and Rate 41 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 42  ====
 * @default
 *
 * @param Rate 42 Variables
 * @desc Input the Variables that are manipulated in Rate 42.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 42 Speed
 * @desc Input the Speed for Rate 42.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 42 Condition
 * @desc Input the specific JavaScript condition for Rate 42. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 42 Enabled?
 * @desc Input 'true' and Rate 42 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 43  ====
 * @default
 *
 * @param Rate 43 Variables
 * @desc Input the Variables that are manipulated in Rate 43.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 43 Speed
 * @desc Input the Speed for Rate 43.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 43 Condition
 * @desc Input the specific JavaScript condition for Rate 43. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 43 Enabled?
 * @desc Input 'true' and Rate 43 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 44  ====
 * @default
 *
 * @param Rate 44 Variables
 * @desc Input the Variables that are manipulated in Rate 44.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 44 Speed
 * @desc Input the Speed for Rate 44.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 44 Condition
 * @desc Input the specific JavaScript condition for Rate 44. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 44 Enabled?
 * @desc Input 'true' and Rate 44 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 45  ====
 * @default
 *
 * @param Rate 45 Variables
 * @desc Input the Variables that are manipulated in Rate 45.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 45 Speed
 * @desc Input the Speed for Rate 45.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 45 Condition
 * @desc Input the specific JavaScript condition for Rate 45. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 45 Enabled?
 * @desc Input 'true' and Rate 45 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 46  ====
 * @default
 *
 * @param Rate 46 Variables
 * @desc Input the Variables that are manipulated in Rate 46.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 46 Speed
 * @desc Input the Speed for Rate 46.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 46 Condition
 * @desc Input the specific JavaScript condition for Rate 46. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 46 Enabled?
 * @desc Input 'true' and Rate 46 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 47  ====
 * @default
 *
 * @param Rate 47 Variables
 * @desc Input the Variables that are manipulated in Rate 47.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 47 Speed
 * @desc Input the Speed for Rate 47.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 47 Condition
 * @desc Input the specific JavaScript condition for Rate 47. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 47 Enabled?
 * @desc Input 'true' and Rate 47 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 48  ====
 * @default
 *
 * @param Rate 48 Variables
 * @desc Input the Variables that are manipulated in Rate 48.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 48 Speed
 * @desc Input the Speed for Rate 48.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 48 Condition
 * @desc Input the specific JavaScript condition for Rate 48. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 48 Enabled?
 * @desc Input 'true' and Rate 48 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 49  ====
 * @default
 *
 * @param Rate 49 Variables
 * @desc Input the Variables that are manipulated in Rate 49.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 49 Speed
 * @desc Input the Speed for Rate 49.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 49 Condition
 * @desc Input the specific JavaScript condition for Rate 49. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 49 Enabled?
 * @desc Input 'true' and Rate 49 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @param ==== Rate 50  ====
 * @default
 *
 * @param Rate 50 Variables
 * @desc Input the Variables that are manipulated in Rate 50.
 * Example: 1, 2, 3
 * @default
 *
 * @param Rate 50 Speed
 * @desc Input the Speed for Rate 50.
 * Example: 1 per 60 frames
 * @default
 *
 * @param Rate 50 Condition
 * @desc Input the specific JavaScript condition for Rate 50. View the Help section for more info. Leave blank for default.
 * @default
 *
 * @param Rate 50 Enabled?
 * @desc Input 'true' and Rate 50 will be enabled at the start of the game. Otherwise, it will need to be enabled manually.
 * @default
 *
 * @help
 *
 * Variable Rates
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * All functions are aliased.
 *
 *
 * ==========================================================================
 * What does this Plugin do?
 * ==========================================================================
 * This Plugin allows you to make certain Variables get increased or decreased
 * by a certain amount every certain of frames in the background of your
 * game. This is similar to a Parallel Process that adds or subtracts a number
 * from a Variable.
 *
 * However! Using this Plugin, you can set certain conditions, enable and 
 * disable rates, and set a Variable to be increased every certain amount
 * of frames instead of being increased every frame.
 *
 *
 * ==========================================================================
 * How does this Plugin work?
 * ==========================================================================
 * Everything is separated into things known as "Rates".
 *
 * A Rate contains 3 things:
 * - the Variables it affects
 * - the Speed in which the Variables are increased by
 * - the JavaScript condition to determine when the Rate is active
 *
 * When a Rate is activated, it will begin to increase (or decrease) the 
 * specified Variables stored within it at the determined Speed in the 
 * background of the game, similar to a Parallel Process.
 *
 *
 * ==========================================================================
 * When are Rates active?
 * ==========================================================================
 * There are three conditions a Rate must meet in order to run:
 * - the Rate must be enabled (activated)
 * - the Rate's JavaScript conditon must be true
 * - this Plugin's Global condition must be true
 *
 * We'll get into conditions and enabling (activating) later.
 *
 * Besides all of this, Rates will only be active when the Player is on the
 * Map, or in a Battle.
 * 
 * If the Player is on the Title Screen, in their Menu, selecting a move
 * in the Battle, or on the Game Over Screen, Rates will not be running.
 * 
 *
 * ==========================================================================
 * Rate ## Variables
 * ==========================================================================
 * These Parameters allow you to set the Variables that will be affected
 * by the Rate.
 *
 * You may simply put one Variable ID, or you may put in multiple.
 * If you put in multiple, seperate them with commas.
 *
 * Here are some examples:
 *
 * 3
 *
 * 1, 2, 6
 *
 * 3, 8, 5, 9, 10, 34
 *
 *
 * ==========================================================================
 * Rate ## Speed
 * ==========================================================================
 * These Parameters allow you to set the Speed in which the Variables
 * are increased.
 *
 * You must input both the amount that the Variables are increased/decreased
 * by, and how often this occurs using this formula:
 *
 * x per y frames
 *
 * x = amount that is added to the Variables
 * y = the frequency of frames in which this occurs
 *
 * For example, "1 per 60 frames" would increase the Variables by 1 
 * every 60 frames (1 second).
 *
 * Here are some more examples:
 *
 * 2 per 120 frames
 *
 * -5 per 10 frames
 *
 * 10 per 500 frames
 *
 * 1 per 3600 frames
 *
 *
 * You may also use JavaScript to substitute for the numbers:
 *
 * Math.pow(3, 2) per 60 frames
 *
 * Math.randomInt(10) per 120 frames
 *
 * 100 per $gameVariables.value(2) frames
 *
 *
 * ==========================================================================
 * Rate ## Condition
 * ==========================================================================
 * Even when a Rate is activated, it will still need to have its Condition
 * be true.
 *
 * These Conditions use JavaScript, but a couple variables have been created
 * in order to make your life easier:
 *
 * v - Game Variables
 * s - Game Switches
 * actor - Game Actors
 * member - Party Members
 *
 * Those variables are all arrays, so you use [square brackets] to reference
 * a certain value from them.
 *
 * For example:
 *
 * v[1] == 10
 * If this was the Condition of Rate 1, then Rate 1 will only be active when
 * Variable ID 1 is equal to 10.
 *
 * s[1] == true
 * If this was the Condition of Rate 1, then Rate 1 will only be active when
 * Switch ID 1 is ON.
 *
 * actor[1].level > 50
 * If this was the Condition of Rate 1, then Rate 1 will only be active when
 * Actor ID 1's level is greater than 50.
 *
 * member[0].hp < 100
 * If this was the Condition of Rate 1, then Rate 1 will only be active when
 * the Actor in the first slot of the Party has HP that is less than 100.
 *
 * member[1].hasWeapon($dataWeapons[5])
 * If this was the Condition of Rate 1, then Rate 1 will only be active when
 * the Actor in the second slot of the Party has Weapon ID 5 equipped.
 *
 * member[member.length - 1].isStateAdded(3)
 * If this was the Condition of Rate 1, then Rate 1 will only be active when
 * the Actor in the last slot of the Party has State 3 inflicted.
 * (If there is only 1 member, this will refer to that member.
 *  If there are 2 members, this will refer to the second one, etc...)
 *
 *
 *
 * Besides all of that, other JavaScript conditions can be used.
 * Here are some random examples:
 *
 * $gamePlayer.isDashing()
 * Will only be active when the Player is dashing/running.
 *
 * $gamePlayer.canMove()
 * Will only be active when the Player can move.
 *
 * $gameMap.isEventRunning() == false
 * Will only be active when there are no autorun events occuring.
 *
 * $gameMessage.isBusy() == false
 * Will only be active when there are no "Show Message" type events running.
 *
 * $gamePlayer.isInVehicle()
 * Will only be active when the Player is in a Vehicle
 * 
 *
 * ==========================================================================
 * Rate ## Enabled?
 * ==========================================================================
 * Setting this to "true" will just activate the Rate straight from the 
 * beginning of the game.
 *
 * You may want to do this if you wish the Rate to be active at the start
 * of the game, or if you wish to purely use conditions in order to control
 * the Rate.
 *
 * If you set this to "false", then you'll need to use Plugin Commands to 
 * manually activate (enable) the Rate.
 * 
 * Plugin Commands:
 *
 *  - VariableRate # Enable
 * Enables Rate #
 * Example: VariableRate 1 Enable
 *   (Enables Rate 1)
 *
 *  - VariableRate # Disable
 * Disables Rate #
 * Example: VariableRate 5 Disable
 *   (Disables Rate 5)
 *
 *  - VariableRate # Toggle
 * Changes the current state of Rate # to the opposite of its current state.
 * Example: VariableRate 2 Toggle
 *   (If Rate 2 is disabled, it will be enabled;
 *    If Rate 2 is enabled, it will be disabled.)
 *
 *
 * ==========================================================================
 *  End of Help File
 * ==========================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {

	var lcm = function(x, y) {  
		return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));  
	}  
  
	var gcd = function(x, y) {  
		x = Math.abs(x);  
		y = Math.abs(y);  
		while(y) {  
			var t = y;
			y = x % y;
			x = t;  
		}  
		return x;  
	} 

	var isBlank = function(string) {
		return string.trim().length === 0;
	}

 	var updateOnMap = eval(String(PluginManager.parameters('SRD_VariableRates')['Update on Map?']));
 	var updateInBattle = eval(String(PluginManager.parameters('SRD_VariableRates')['Update in Battle?']));
 	var globalCondition = String(PluginManager.parameters('SRD_VariableRates')['Global Condition']);

	var variablesUsed = [];
	variablesUsed[0] = [0, 0];
	var j = 1;
	var lineEnabled = [];
	lineEnabled[0] = false;
	var varRates = [];
	var varFrames = [];
	var maxVariableID = 0;

	var frame = 1;
	var maxFrame = 1;

	var regexRate = /\s*(.*)\s*per\s*(.*)\s*Frames?\s*/i;

    for(var i = 1; i <= 30; i += 1)
    {
        var variables = String(PluginManager.parameters('SRD_VariableRates')['Rate ' + String(i) + ' Variables']);
        var rate = String(PluginManager.parameters('SRD_VariableRates')['Rate ' + String(i) + ' Speed']);
        var condition = String(PluginManager.parameters('SRD_VariableRates')['Rate ' + String(i) + ' Condition']);
        lineEnabled[i] = String(PluginManager.parameters('SRD_VariableRates')['Rate ' + String(i) + ' Enabled?']).trim().toLowerCase() === 'true';
        if(!isBlank(variables)) {
            var temp = rate.match(regexRate);
            var ids = variables.split(/\s*,\s*/i);
            for(var k = 0; k < ids.length; k += 1) 
            {
                var id = Number(ids[k]);

                variablesUsed[j] = [id, i];
                if(!isBlank(condition)) {
                    variablesUsed[j][2] = condition;
                } else {
                    variablesUsed[j][2] = String(PluginManager.parameters('SRD_VariableRates')['Default Condition']);
                }

                j += 1;
                varRates[id] = temp[1];

                varFrames[id] = temp[2];
                maxFrame = lcm(eval(temp[2]), maxFrame);
            }
        }
    }

    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
	    _Scene_Map_update.call(this);
	    if(updateOnMap && eval(globalCondition)) {
	    	this.moveMapVariables();
	    }
	};

	var _Scene_Battle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
	    _Scene_Battle_update.call(this);
	    if(updateInBattle && eval(globalCondition)) {
	    	this.moveMapVariables();
	    }
	};

    Scene_Base.prototype.moveMapVariables = function() {
        frame = frame + 1;
        if(frame > maxFrame) {
            frame = 1;
        }

        var v = $gameVariables._data;
        var s = $gameSwitches._data;
        var actor = $gameActors._data;
        var member = $gameParty.members();

        for(var i = 1; i < variablesUsed.length; i += 1)
        {
        	if(lineEnabled[variablesUsed[i][1]] && eval(variablesUsed[i][2])) {
	            var id = variablesUsed[i][0];
	            if(frame % eval(varFrames[id]) === 0) {
	                $gameVariables.setValue(id, $gameVariables.value(id) + eval(varRates[id]));
	            }
	        }
        }
    };

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this, command, args);

	    if(command.toLowerCase() === 'variablerate') {
	    	if(args[1].toLowerCase() === 'enable') {
	    		lineEnabled[variablesUsed[Number(args[0])][1]] = true;
	    	} else if(args[1].toLowerCase() === 'disable') {
	    		lineEnabled[variablesUsed[Number(args[0])][1]] = false;
	    	} else if(args[1].toLowerCase() === 'toggle') {
	    		lineEnabled[variablesUsed[Number(args[0])][1]] = !lineEnabled[variablesUsed[Number(args[0])][1]];
	    	}
	    }
	};

})();