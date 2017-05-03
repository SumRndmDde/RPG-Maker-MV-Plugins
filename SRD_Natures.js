/*:
 * @plugindesc Replicates the Nature system from Pokemon games to affect Actors.
 * @author SumRndmDde
 *
 * @param Buff Boost Ratio
 * @desc The value that is multiplied by the stats that are buffed from the Nature.
 * @default 1.10
 *
 * @param Nerf Boost Ratio
 * @desc The value that is multiplied by the stats that are nerfed from the Nature.
 * @default 0.90
 *
 * @param == Status Screen ==
 * @default
 *
 * @param Edit Status Screen
 * @desc If 'true', then the Plugin will edit the Status screen to show the Actor's nature and stat boosts.
 * @default true
 *
 * @param Nature Text
 * @desc The text showing the Actor's nature. Use %1 to represent where the nature should be placed.
 * @default Nature: %1
 *
 * @param Nature Text Size
 * @desc The size of the Nature Text.
 * @default 20
 *
 * @param Nature Text Color
 * @desc The color of the Actor's nature on the Status screen.
 * @default #eaeff4
 *
 * @param Buff Stat Color
 * @desc The color of the stat that gains a buff from the Actor's nature.
 * @default #a2e7c3
 *
 * @param Nerf Stat Color
 * @desc The color of the stat that gains a buff from the Actor's nature.
 * @default #f6546a
 *
 * @param == Nature 1 ==
 * @default
 *
 * @param Nature 1 Name
 * @desc The name of Nature 1.
 * @default Bold
 *
 * @param Nature 1 Buffs
 * @desc The list of stats with buffs on Actors with Nature 1.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default def
 *
 * @param Nature 1 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 1.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default atk
 *
 * @param Nature 1 Chance
 * @desc The chance an Actor will have Nature 1. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 2 ==
 * @default
 *
 * @param Nature 2 Name
 * @desc The name of Nature 2.
 * @default Adamant
 *
 * @param Nature 2 Buffs
 * @desc The list of stats with buffs on Actors with Nature 2.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default atk
 *
 * @param Nature 2 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 2.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default mat
 *
 * @param Nature 2 Chance
 * @desc The chance an Actor will have Nature 2. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 3 ==
 * @default
 *
 * @param Nature 3 Name
 * @desc The name of Nature 3.
 * @default Jolly
 *
 * @param Nature 3 Buffs
 * @desc The list of stats with buffs on Actors with Nature 3.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default agi
 *
 * @param Nature 3 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 3.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default mat
 *
 * @param Nature 3 Chance
 * @desc The chance an Actor will have Nature 3. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 4 ==
 * @default
 *
 * @param Nature 4 Name
 * @desc The name of Nature 4.
 * @default Calm
 *
 * @param Nature 4 Buffs
 * @desc The list of stats with buffs on Actors with Nature 4.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default mdf
 *
 * @param Nature 4 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 4.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default atk
 *
 * @param Nature 4 Chance
 * @desc The chance an Actor will have Nature 4. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 5 ==
 * @default
 *
 * @param Nature 5 Name
 * @desc The name of Nature 5.
 * @default Modest
 *
 * @param Nature 5 Buffs
 * @desc The list of stats with buffs on Actors with Nature 5.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default mat
 *
 * @param Nature 5 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 5.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default atk
 *
 * @param Nature 5 Chance
 * @desc The chance an Actor will have Nature 5. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 6 ==
 * @default
 *
 * @param Nature 6 Name
 * @desc The name of Nature 6.
 * @default
 *
 * @param Nature 6 Buffs
 * @desc The list of stats with buffs on Actors with Nature 6.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 6 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 6.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 6 Chance
 * @desc The chance an Actor will have Nature 6. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 7 ==
 * @default
 *
 * @param Nature 7 Name
 * @desc The name of Nature 7.
 * @default
 *
 * @param Nature 7 Buffs
 * @desc The list of stats with buffs on Actors with Nature 7.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 7 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 7.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 7 Chance
 * @desc The chance an Actor will have Nature 7. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 8 ==
 * @default
 *
 * @param Nature 8 Name
 * @desc The name of Nature 8.
 * @default
 *
 * @param Nature 8 Buffs
 * @desc The list of stats with buffs on Actors with Nature 8.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 8 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 8.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 8 Chance
 * @desc The chance an Actor will have Nature 8. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 9 ==
 * @default
 *
 * @param Nature 9 Name
 * @desc The name of Nature 9.
 * @default
 *
 * @param Nature 9 Buffs
 * @desc The list of stats with buffs on Actors with Nature 9.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 9 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 9.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 9 Chance
 * @desc The chance an Actor will have Nature 9. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 10 ==
 * @default
 *
 * @param Nature 10 Name
 * @desc The name of Nature 10.
 * @default
 *
 * @param Nature 10 Buffs
 * @desc The list of stats with buffs on Actors with Nature 10.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 10 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 10.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 10 Chance
 * @desc The chance an Actor will have Nature 10. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 11 ==
 * @default
 *
 * @param Nature 11 Name
 * @desc The name of Nature 11.
 * @default
 *
 * @param Nature 11 Buffs
 * @desc The list of stats with buffs on Actors with Nature 11.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 11 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 11.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 11 Chance
 * @desc The chance an Actor will have Nature 11. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 12 ==
 * @default
 *
 * @param Nature 12 Name
 * @desc The name of Nature 12.
 * @default
 *
 * @param Nature 12 Buffs
 * @desc The list of stats with buffs on Actors with Nature 12.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 12 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 12.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 12 Chance
 * @desc The chance an Actor will have Nature 12. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 13 ==
 * @default
 *
 * @param Nature 13 Name
 * @desc The name of Nature 13.
 * @default
 *
 * @param Nature 13 Buffs
 * @desc The list of stats with buffs on Actors with Nature 13.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 13 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 13.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 13 Chance
 * @desc The chance an Actor will have Nature 13. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 14 ==
 * @default
 *
 * @param Nature 14 Name
 * @desc The name of Nature 14.
 * @default
 *
 * @param Nature 14 Buffs
 * @desc The list of stats with buffs on Actors with Nature 14.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 14 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 14.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 14 Chance
 * @desc The chance an Actor will have Nature 14. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 15 ==
 * @default
 *
 * @param Nature 15 Name
 * @desc The name of Nature 15.
 * @default
 *
 * @param Nature 15 Buffs
 * @desc The list of stats with buffs on Actors with Nature 15.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 15 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 15.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 15 Chance
 * @desc The chance an Actor will have Nature 15. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 16 ==
 * @default
 *
 * @param Nature 16 Name
 * @desc The name of Nature 16.
 * @default
 *
 * @param Nature 16 Buffs
 * @desc The list of stats with buffs on Actors with Nature 16.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 16 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 16.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 16 Chance
 * @desc The chance an Actor will have Nature 16. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 17 ==
 * @default
 *
 * @param Nature 17 Name
 * @desc The name of Nature 17.
 * @default
 *
 * @param Nature 17 Buffs
 * @desc The list of stats with buffs on Actors with Nature 17.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 17 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 17.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 17 Chance
 * @desc The chance an Actor will have Nature 17. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 18 ==
 * @default
 *
 * @param Nature 18 Name
 * @desc The name of Nature 18.
 * @default
 *
 * @param Nature 18 Buffs
 * @desc The list of stats with buffs on Actors with Nature 18.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 18 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 18.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 18 Chance
 * @desc The chance an Actor will have Nature 18. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 19 ==
 * @default
 *
 * @param Nature 19 Name
 * @desc The name of Nature 19.
 * @default
 *
 * @param Nature 19 Buffs
 * @desc The list of stats with buffs on Actors with Nature 19.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 19 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 19.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 19 Chance
 * @desc The chance an Actor will have Nature 19. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 20 ==
 * @default
 *
 * @param Nature 20 Name
 * @desc The name of Nature 20.
 * @default
 *
 * @param Nature 20 Buffs
 * @desc The list of stats with buffs on Actors with Nature 20.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 20 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 20.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 20 Chance
 * @desc The chance an Actor will have Nature 20. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 21 ==
 * @default
 *
 * @param Nature 21 Name
 * @desc The name of Nature 21.
 * @default
 *
 * @param Nature 21 Buffs
 * @desc The list of stats with buffs on Actors with Nature 21.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 21 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 21.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 21 Chance
 * @desc The chance an Actor will have Nature 21. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 22 ==
 * @default
 *
 * @param Nature 22 Name
 * @desc The name of Nature 22.
 * @default
 *
 * @param Nature 22 Buffs
 * @desc The list of stats with buffs on Actors with Nature 22.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 22 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 22.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 22 Chance
 * @desc The chance an Actor will have Nature 22. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 23 ==
 * @default
 *
 * @param Nature 23 Name
 * @desc The name of Nature 23.
 * @default
 *
 * @param Nature 23 Buffs
 * @desc The list of stats with buffs on Actors with Nature 23.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 23 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 23.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 23 Chance
 * @desc The chance an Actor will have Nature 23. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 24 ==
 * @default
 *
 * @param Nature 24 Name
 * @desc The name of Nature 24.
 * @default
 *
 * @param Nature 24 Buffs
 * @desc The list of stats with buffs on Actors with Nature 24.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 24 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 24.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 24 Chance
 * @desc The chance an Actor will have Nature 24. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 25 ==
 * @default
 *
 * @param Nature 25 Name
 * @desc The name of Nature 25.
 * @default
 *
 * @param Nature 25 Buffs
 * @desc The list of stats with buffs on Actors with Nature 25.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 25 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 25.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 25 Chance
 * @desc The chance an Actor will have Nature 25. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 26 ==
 * @default
 *
 * @param Nature 26 Name
 * @desc The name of Nature 26.
 * @default
 *
 * @param Nature 26 Buffs
 * @desc The list of stats with buffs on Actors with Nature 26.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 26 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 26.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 26 Chance
 * @desc The chance an Actor will have Nature 26. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 27 ==
 * @default
 *
 * @param Nature 27 Name
 * @desc The name of Nature 27.
 * @default
 *
 * @param Nature 27 Buffs
 * @desc The list of stats with buffs on Actors with Nature 27.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 27 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 27.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 27 Chance
 * @desc The chance an Actor will have Nature 27. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 28 ==
 * @default
 *
 * @param Nature 28 Name
 * @desc The name of Nature 28.
 * @default
 *
 * @param Nature 28 Buffs
 * @desc The list of stats with buffs on Actors with Nature 28.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 28 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 28.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 28 Chance
 * @desc The chance an Actor will have Nature 28. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 29 ==
 * @default
 *
 * @param Nature 29 Name
 * @desc The name of Nature 29.
 * @default
 *
 * @param Nature 29 Buffs
 * @desc The list of stats with buffs on Actors with Nature 29.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 29 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 29.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 29 Chance
 * @desc The chance an Actor will have Nature 29. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 30 ==
 * @default
 *
 * @param Nature 30 Name
 * @desc The name of Nature 30.
 * @default
 *
 * @param Nature 30 Buffs
 * @desc The list of stats with buffs on Actors with Nature 30.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 30 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 30.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 30 Chance
 * @desc The chance an Actor will have Nature 30. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 31 ==
 * @default
 *
 * @param Nature 31 Name
 * @desc The name of Nature 31.
 * @default
 *
 * @param Nature 31 Buffs
 * @desc The list of stats with buffs on Actors with Nature 31.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 31 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 31.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 31 Chance
 * @desc The chance an Actor will have Nature 31. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 32 ==
 * @default
 *
 * @param Nature 32 Name
 * @desc The name of Nature 32.
 * @default
 *
 * @param Nature 32 Buffs
 * @desc The list of stats with buffs on Actors with Nature 32.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 32 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 32.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 32 Chance
 * @desc The chance an Actor will have Nature 32. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 33 ==
 * @default
 *
 * @param Nature 33 Name
 * @desc The name of Nature 33.
 * @default
 *
 * @param Nature 33 Buffs
 * @desc The list of stats with buffs on Actors with Nature 33.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 33 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 33.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 33 Chance
 * @desc The chance an Actor will have Nature 33. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 34 ==
 * @default
 *
 * @param Nature 34 Name
 * @desc The name of Nature 34.
 * @default
 *
 * @param Nature 34 Buffs
 * @desc The list of stats with buffs on Actors with Nature 34.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 34 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 34.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 34 Chance
 * @desc The chance an Actor will have Nature 34. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 35 ==
 * @default
 *
 * @param Nature 35 Name
 * @desc The name of Nature 35.
 * @default
 *
 * @param Nature 35 Buffs
 * @desc The list of stats with buffs on Actors with Nature 35.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 35 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 35.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 35 Chance
 * @desc The chance an Actor will have Nature 35. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 36 ==
 * @default
 *
 * @param Nature 36 Name
 * @desc The name of Nature 36.
 * @default
 *
 * @param Nature 36 Buffs
 * @desc The list of stats with buffs on Actors with Nature 36.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 36 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 36.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 36 Chance
 * @desc The chance an Actor will have Nature 36. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 37 ==
 * @default
 *
 * @param Nature 37 Name
 * @desc The name of Nature 37.
 * @default
 *
 * @param Nature 37 Buffs
 * @desc The list of stats with buffs on Actors with Nature 37.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 37 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 37.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 37 Chance
 * @desc The chance an Actor will have Nature 37. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 38 ==
 * @default
 *
 * @param Nature 38 Name
 * @desc The name of Nature 38.
 * @default
 *
 * @param Nature 38 Buffs
 * @desc The list of stats with buffs on Actors with Nature 38.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 38 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 38.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 38 Chance
 * @desc The chance an Actor will have Nature 38. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 39 ==
 * @default
 *
 * @param Nature 39 Name
 * @desc The name of Nature 39.
 * @default
 *
 * @param Nature 39 Buffs
 * @desc The list of stats with buffs on Actors with Nature 39.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 39 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 39.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 39 Chance
 * @desc The chance an Actor will have Nature 39. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 40 ==
 * @default
 *
 * @param Nature 40 Name
 * @desc The name of Nature 40.
 * @default
 *
 * @param Nature 40 Buffs
 * @desc The list of stats with buffs on Actors with Nature 40.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 40 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 40.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 40 Chance
 * @desc The chance an Actor will have Nature 40. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 41 ==
 * @default
 *
 * @param Nature 41 Name
 * @desc The name of Nature 41.
 * @default
 *
 * @param Nature 41 Buffs
 * @desc The list of stats with buffs on Actors with Nature 41.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 41 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 41.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 41 Chance
 * @desc The chance an Actor will have Nature 41. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 42 ==
 * @default
 *
 * @param Nature 42 Name
 * @desc The name of Nature 42.
 * @default
 *
 * @param Nature 42 Buffs
 * @desc The list of stats with buffs on Actors with Nature 42.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 42 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 42.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 42 Chance
 * @desc The chance an Actor will have Nature 42. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 43 ==
 * @default
 *
 * @param Nature 43 Name
 * @desc The name of Nature 43.
 * @default
 *
 * @param Nature 43 Buffs
 * @desc The list of stats with buffs on Actors with Nature 43.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 43 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 43.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 43 Chance
 * @desc The chance an Actor will have Nature 43. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 44 ==
 * @default
 *
 * @param Nature 44 Name
 * @desc The name of Nature 44.
 * @default
 *
 * @param Nature 44 Buffs
 * @desc The list of stats with buffs on Actors with Nature 44.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 44 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 44.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 44 Chance
 * @desc The chance an Actor will have Nature 44. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 45 ==
 * @default
 *
 * @param Nature 45 Name
 * @desc The name of Nature 45.
 * @default
 *
 * @param Nature 45 Buffs
 * @desc The list of stats with buffs on Actors with Nature 45.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 45 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 45.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 45 Chance
 * @desc The chance an Actor will have Nature 45. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 46 ==
 * @default
 *
 * @param Nature 46 Name
 * @desc The name of Nature 46.
 * @default
 *
 * @param Nature 46 Buffs
 * @desc The list of stats with buffs on Actors with Nature 46.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 46 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 46.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 46 Chance
 * @desc The chance an Actor will have Nature 46. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 47 ==
 * @default
 *
 * @param Nature 47 Name
 * @desc The name of Nature 47.
 * @default
 *
 * @param Nature 47 Buffs
 * @desc The list of stats with buffs on Actors with Nature 47.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 47 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 47.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 47 Chance
 * @desc The chance an Actor will have Nature 47. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 48 ==
 * @default
 *
 * @param Nature 48 Name
 * @desc The name of Nature 48.
 * @default
 *
 * @param Nature 48 Buffs
 * @desc The list of stats with buffs on Actors with Nature 48.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 48 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 48.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 48 Chance
 * @desc The chance an Actor will have Nature 48. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 49 ==
 * @default
 *
 * @param Nature 49 Name
 * @desc The name of Nature 49.
 * @default
 *
 * @param Nature 49 Buffs
 * @desc The list of stats with buffs on Actors with Nature 49.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 49 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 49.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 49 Chance
 * @desc The chance an Actor will have Nature 49. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @param == Nature 50 ==
 * @default
 *
 * @param Nature 50 Name
 * @desc The name of Nature 50.
 * @default
 *
 * @param Nature 50 Buffs
 * @desc The list of stats with buffs on Actors with Nature 50.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 50 Nerfs
 * @desc The list of stats with nerfs on Actors with Nature 50.
 * Choices are: mhp, mmp, atk, def, mat, mdf, agi, luk
 * @default
 *
 * @param Nature 50 Chance
 * @desc The chance an Actor will have Nature 50. Insert a number between 0 to 1. The closer to 1, the higher the chance.
 * @default 1.0
 *
 * @help
 *
 * Natures
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin requires the Copy Actors (SRD_CopyActors) plugin.
 * Make sure it is placed above this plugin.
 *
 *
 * This is a Plugin that replicates the Nature system from Pokemon.
 * Each individual Actor will be assigned a random Nature when they are
 * created. This Nature will give certain buffs and nerfs to the Actor
 * depending on what the Nature is.
 *
 * You can customize the available Natures in the Parameters.
 * You can choose their name, buffs, nerfs, and chance of appearing.
 *
 * If a Nature's name is left blank, it will not be available to be chosen.
 * Otherwise, even Natures with no buffs or nerfs can appear.
 *
 *
 * ==========================================================================
 *  Plugin Commands
 * ==========================================================================
 *
 * You can use the following plugin command to change an Actor's nature:
 *
 *   ChangeActorNature actorId natureId
 *
 * actorId = Set this to a number or a Game Variable (v[x])
 * natureId = Set this to the number listed of the nature in the Parameters
 *
 * Examples:
 *
 *   ChangeActorNature 3 5
 *   ChangeActorNature v[2] 3
 *
 * ==========================================================================
 *
 * You can use the following plugin command to store an Actor's nature in a
 * Game Variable:
 *
 *   StoreActorNature actorId variableId
 *
 * actorId = Set this to a number or a Game Variable (v[x])
 * natureId = Set this to the ID of the Variable that will store the Nature ID
 *
 * Examples:
 *
 *   StoreActorNature 5 10
 *   StoreActorNature v[7] 11
 *
 *
 * ==========================================================================
 *  Game_Actor Functions
 * ==========================================================================
 *
 * Here are some Game_Actor functions you can now use with Actor variables:
 *
 *
 *   actor.nature()
 *
 * Returns the name of the Actor's nature.
 *
 *
 *   actor.natureId()
 *
 * Returns the ID of the Actor's nature.
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
 *
 */

var SRD = SRD || {};
SRD.Natures = SRD.Natures || {};

var Imported = Imported || {};
Imported["SumRndmDde Natures"] = 1.00;

if(Imported["SumRndmDde Copy Actors"]) {

(function(_, $) {

	"use strict";

	var params = PluginManager.parameters('SRD_Natures');

	_.buffBoost = parseFloat(params['Buff Boost Ratio']);
	_.nerfBoost = parseFloat(params['Nerf Boost Ratio']);
	_.edit = String(params['Edit Status Screen']).trim().toLowerCase() === 'true';
	_.text = String(params['Nature Text']);
	_.size = parseInt(params['Nature Text Size']);
	_.color = String(params['Nature Text Color']);
	_.buffColor = String(params['Buff Stat Color']);
	_.nerfColor = String(params['Nerf Stat Color']);

	_.natures = [];
	for(var i = 1; i <= 50; i++) {
		var name = String(params['Nature ' + i + ' Name']);
		if(name.trim().length > 0) {
			_.natures[i] = {};
			_.natures[i].name = name;
			_.natures[i].buffs = String(params['Nature ' + i + ' Buffs']);
			_.natures[i].nerfs = String(params['Nature ' + i + ' Nerfs']);
			_.natures[i].chance = parseFloat(params['Nature ' + i + ' Chance']);
		}
	}

	//-----------------------------------------------------------------------------
	// SRD.CopyActors
	//-----------------------------------------------------------------------------

	var _$_setupActorVariables = $.setupActorVariables;
	$.setupActorVariables = function(actor) {
		_$_setupActorVariables.call(this, actor);
		_.setupActorNature(actor);
	};

	//-----------------------------------------------------------------------------
	// SRD.Natures
	//-----------------------------------------------------------------------------

	_.setupActorNature = function(actor) {
		var nature = null;
		var natureId = 0;
		while(!nature) {
			natureId = Math.randomInt(_.natures.length) + 1;
			nature = _.natures[natureId];
			if(nature && Math.random() > nature.chance) {
				nature = null;
			}
		}
		actor.nature = nature.name;
		actor.natureId = natureId;
		actor.natureBuffs = nature.buffs;
		actor.natureNerfs = nature.nerfs;
	};

	var _DataManager_createGameObjects = DataManager.createGameObjects;
	DataManager.createGameObjects = function() {
		_DataManager_createGameObjects.call(this);
		var data = $dataActors;
		for(var i = 0; i < data.length; i++) {
			if(data[i] && data[i].nature) {
				var actor = data[i];
				$gameSystem.natureStorage[actor.id] = [actor.nature, actor.natureId, actor.natureBuffs, actor.natureNerfs];
			}
		}
	};

	_.changeActorNature = function(actorId, natureId) {
		var actor = $dataActors[actorId];
		var nature = _.natures[natureId];
		if(actor && nature) {
			actor.nature = nature.name;
			actor.natureId = natureId;
			actor.natureBuffs = nature.buffs;
			actor.natureNerfs = nature.nerfs;
		}
		$gameSystem.natureStorage[actorId] = [actor.nature, actor.natureId, actor.natureBuffs, actor.natureNerfs];
	};

	_.loadActors = function(data, system) {
		for(var i = 0; i < system.natureStorage.length; i++) {
			if(system.natureStorage[i]) {
				var d = data[i];
				data[i].nature = system.natureStorage[i][0];
				data[i].natureId = system.natureStorage[i][1];
				data[i].natureBuffs = system.natureStorage[i][2];
				data[i].natureNerfs = system.natureStorage[i][3];
			}
		}
	};

	//-----------------------------------------------------------------------------
	// DataManager
	//-----------------------------------------------------------------------------

	var _DataManager_extractSaveContents = DataManager.extractSaveContents;
	DataManager.extractSaveContents = function(contents) {
		_DataManager_extractSaveContents.call(this, contents);
		_.loadActors($dataActors, $gameSystem);
	};

	//-----------------------------------------------------------------------------
	// Game_System
	//-----------------------------------------------------------------------------

	var _Game_System_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
		_Game_System_initialize.call(this);
		this._natureActorStorage = [];
	};

	Object.defineProperty(Game_System.prototype, 'natureStorage', {
		get: function() {
			return this._natureActorStorage;
		},
		set: function(value) {
			this._natureActorStorage = value;
		},
		configurable: true
	});

	//-----------------------------------------------------------------------------
	// Game_Actor
	//-----------------------------------------------------------------------------

	var _Game_Actor_param = Game_Actor.prototype.param;
	Game_Actor.prototype.param = function(paramId) {
		var value = _Game_Actor_param.call(this, paramId);
		value *= this.getNatureBoost(paramId);
		var maxValue = this.paramMax(paramId);
		var minValue = this.paramMin(paramId);
		return Math.round(value.clamp(minValue, maxValue));
	};

	Game_Actor.prototype.getNatureBoost = function(paramId) {
		var params = ['mhp', 'mmp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
		if(this.actor().natureBuffs.match(params[paramId])) return _.buffBoost;
		if(this.actor().natureNerfs.match(params[paramId])) return _.nerfBoost;
		return 1;
	};

	Game_Actor.prototype.nature = function() {
		return this.actor().nature;
	};

	Game_Actor.prototype.natureId = function() {
		return this.actor().natureId;
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if(command.trim().toLowerCase() === 'changeactornature') {
			var v = $gameVariables._data;
			_.changeActorNature(eval(args[0]), parseInt(args[1]));
		} else if(command.trim().toLowerCase() === 'storeactornature') {
			var v = $gameVariables._data;
			var actor = $gameActors.actor(eval(args[0]));
			$gameVariables.setValue(parseInt(args[1]), actor.natureId());
		}
	};

	//-----------------------------------------------------------------------------
	// Window_Status & Window_StatusInfo
	//-----------------------------------------------------------------------------

	if(_.edit) {
	if(Imported.YEP_StatusMenuCore) {

	//Edit of Yanfly's drawGeneralParam function to add compatibility
	Window_StatusInfo.prototype.drawGeneralParam = function() {
		var rect = new Rectangle();
		rect.width = (this.contents.width - this.standardPadding()) / 2;
		rect.y = this.lineHeight() * 2;
		rect.height = this.lineHeight();
		var dx = rect.x + this.textPadding();
		var dw = rect.width - this.textPadding() * 2;
		this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.level, dx, rect.y, dw, 'left');
		this.changeTextColor(this.normalColor());
		var text = Yanfly.Util.toGroup(this._actor.level);
		this.drawText(text, dx, rect.y, dw, 'right');
		for (var i = 0; i < 8; ++i) {
			if (i < 2) {
				rect.y += this.lineHeight();
			} else if (i === 2) {
				rect.y += this.lineHeight();
				rect.width /= 2;
				dw = rect.width - this.textPadding() * 2;
			} else if (i % 2 === 0) {
				rect.x = 0;
				dx = rect.x + this.textPadding();
				rect.y += this.lineHeight();
			} else {
				rect.x += rect.width;
				dx += rect.width;
			}
			this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
			this.changeTextColor(this.getNatureColor(i, this._actor));
			this.drawText(TextManager.param(i), dx, rect.y, dw, 'left');
			this.changeTextColor(this.normalColor());
			text = Yanfly.Util.toGroup(this._actor.param(i));
			this.drawText(text, dx, rect.y, dw, 'right');
		}
	};

	Window_StatusInfo.prototype.getNatureColor = function(paramId, actor) {
		var params = ['mhp', 'mmp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
		if(actor.actor().natureBuffs.match(params[paramId])) return _.buffColor;
		if(actor.actor().natureNerfs.match(params[paramId])) return _.nerfColor;
		return this.systemColor();
	};

	//Edit of Yanfly's drawGeneralParam function to draw Nature
	Window_StatusInfo.prototype.drawGeneral = function() {
		var dx = this.standardPadding() / 2;
		var dy = 0;
		var dw = (this.contents.width - this.standardPadding()) / 2;
		var dh = this.lineHeight();
		var text;
		this.changeTextColor(this.systemColor());
		this.drawText(Yanfly.Param.StatusParamText, dx, dy, dw, 'center');

		//Draw Actor Nature
		var ntext = _.text.replace(/%1/g, this._actor.nature());
		this.changeTextColor(_.color);
		this.contents.fontSize = _.size;
		this.drawText(ntext, dx, this.lineHeight(), dw, 'center');
		this.resetFontSettings();
		this.changeTextColor(this.systemColor());

		dx += this.contents.width / 2;
		this.drawText(Yanfly.Param.StatusExpText, dx, dy, dw, 'center');
		this.drawGeneralParam(dx, dy, dw, dh);
		this.drawGeneralExp(dx, dy, dw, dh);
	};

	} else {

	Window_Status.prototype.drawParameters = function(x, y) {
		var lineHeight = this.lineHeight();
		//Draw Actor Nature
		var ntext = _.text.replace(/%1/g, this._actor.nature());
		this.changeTextColor(_.color);
		this.contents.fontSize = _.size;
		this.drawText(ntext, x, y - (lineHeight / 2), 220, 'center');
		this.resetFontSettings();
		y += (lineHeight / 2);
		for (var i = 0; i < 6; i++) {
			var paramId = i + 2;
			var y2 = y + lineHeight * i;
			this.changeTextColor(this.getNatureColor(paramId, this._actor));
			this.drawText(TextManager.param(paramId), x, y2, 160);
			this.resetTextColor();
			this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
		}
	};

	Window_Status.prototype.getNatureColor = function(paramId, actor) {
		var params = ['mhp', 'mmp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
		if(actor.actor().natureBuffs.match(params[paramId])) return _.buffColor;
		if(actor.actor().natureNerfs.match(params[paramId])) return _.nerfColor;
		return this.systemColor();
	};

	}
	}

})(SRD.Natures, SRD.CopyActors);

} else alert('In order to use the SRD_Natures plugin, you need the SRD_CopyActors plugin installed and placed above.');