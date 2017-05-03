/*:
 * @plugindesc This plugin allows developers to customize the window set up of battles within their game.
 * @author SumRndmDde
 *
 * @param Force Within Screen
 * @desc All windows listed will be forced to remain within the screen. Use the names from Parameters. Separate with commas. 
 * @default Actor Command
 *
 * @param Motion Reset Speed
 * @desc The speed in which windows return to their original position from a motion.
 * @default 10
 *
 * @param Instant Move Distance
 * @desc If the window's distance to their goal is greater than this, it will be placed there instantly.
 * @default 100
 *
 * @param ===== Windows =====
 * @default =================================
 *
 * @param == Battle Status ==
 * @default
 *
 * @param Auto-Move Battle Status
 * @desc The width of the Battle Status Window.
 * Can be a number or JavaScript code.
 * @default false
 *
 * @param Battle Status X
 * @desc The X position of the Battle Status Window.
 * Can be a number or JavaScript code.
 * @default (Graphics.boxWidth - BattleManager._statusWindow.width) / 2
 *
 * @param Battle Status Y
 * @desc The Y position of the Battle Status Window.
 * Can be a number or JavaScript code.
 * @default Graphics.boxHeight
 *
 * @param Battle Status Width
 * @desc The width of the Battle Status Window.
 * Can be a number or JavaScript code.
 * @default Graphics.boxWidth
 *
 * @param Battle Status Visible
 * @desc A JavaScript eval that determines whether the Battle Status window is visible or not.
 * @default true
 *
 * @param == Party Command ==
 * @default
 *
 * @param Party Command X
 * @desc The X position of the Party Command Window.
 * Can be a number or JavaScript code.
 * @default 0
 *
 * @param Party Command Y
 * @desc The Y position of the Party Command Window.
 * Can be a number or JavaScript code.
 * @default (Graphics.boxHeight - BattleManager._partyCommandWindow.height) / 2
 *
 * @param Party Command Rows
 * @desc The number of rows in the Party Command Window.
 * Can be a number or JavaScript code.
 * @default 1
 *
 * @param Party Command Cols
 * @desc The number of columns in the Party Command Window.
 * Can be a number or JavaScript code.
 * @default this.maxItems()
 *
 * @param Party Command Width
 * @desc The width of the Party Command Window.
 * Can be a number or JavaScript code.
 * @default Graphics.boxWidth
 *
 * @param Party Command Align
 * @desc The text alignment of the Party Command Window.
 * Choices are:  left | center | right
 * @default center
 *
 * @param Party Command Visible
 * @desc A JavaScript eval that determines whether the Party Command window is visible or not.
 * @default true
 *
 * @param == Actor Command ==
 * @default
 *
 * @param Actor Command X
 * @desc The X position of the Actor Command Window.
 * Can be a number or JavaScript code.
 * @default BattleManager.getCurrentActorSprite().x - (this.width/2)
 *
 * @param Actor Command Y
 * @desc The Y position of the Actor Command Window.
 * Can be a number or JavaScript code.
 * @default BattleManager.getCurrentActorSprite().y - (this.height*1.7)
 *
 * @param Actor Command Rows
 * @desc The number of rows in the Actor Command Window.
 * Can be a number or JavaScript code.
 * @default 2
 *
 * @param Actor Command Cols
 * @desc The number of columns in the Actor Command Window.
 * Can be a number or JavaScript code.
 * @default 2
 *
 * @param Actor Command Width
 * @desc The width of the Actor Command Window.
 * Can be a number or JavaScript code.
 * @default 192 * 2
 *
 * @param Actor Command Align
 * @desc The text alignment of the Actor Command Window.
 * Choices are:  left | center | right
 * @default center
 *
 * @param Actor Command Visible
 * @desc A JavaScript eval that determines whether the Actor Command window is visible or not.
 * @default !BattleManager._skillWindow.visible && !BattleManager._itemWindow.visible && BattleManager.getCurrentActorSprite().x !== 0
 *
 * @param == Skill List ==
 * @default
 *
 * @param Skill List X
 * @desc The X position of the Skill List Window.
 * Can be a number or JavaScript code.
 * @default 0
 *
 * @param Skill List Y
 * @desc The Y position of the Skill List Window.
 * Can be a number or JavaScript code.
 * @default BattleManager._helpWindow.y + BattleManager._helpWindow.height
 *
 * @param Skill List Rows
 * @desc The number of rows in the Skill List Window.
 * Can be a number or JavaScript code.
 * @default 4
 *
 * @param Skill List Cols
 * @desc The number of columns in the Skill List Window.
 * Can be a number or JavaScript code.
 * @default 2
 *
 * @param Skill List Width
 * @desc The width of the Skill List Window.
 * Can be a number or JavaScript code.
 * @default Graphics.boxWidth
 *
 * @param Skill List Align
 * @desc The text alignment of the Skill List Window.
 * Choices are:  left | center | right
 * @default left
 *
 * @param Skill List Visible
 * @desc A JavaScript eval that determines whether the Skill List window is visible or not.
 * @default true
 *
 * @param == Item List ==
 * @default
 *
 * @param Item List X
 * @desc The X position of the Item List Window.
 * Can be a number or JavaScript code.
 * @default 0
 *
 * @param Item List Y
 * @desc The Y position of the Item List Window.
 * Can be a number or JavaScript code.
 * @default BattleManager._helpWindow.y + BattleManager._helpWindow.height
 *
 * @param Item List Rows
 * @desc The number of rows in the Item List Window.
 * Can be a number or JavaScript code.
 * @default 4
 *
 * @param Item List Cols
 * @desc The number of columns in the Item List Window.
 * Can be a number or JavaScript code.
 * @default 2
 *
 * @param Item List Width
 * @desc The width of the Item List Window.
 * Can be a number or JavaScript code.
 * @default Graphics.boxWidth
 *
 * @param Item List Align
 * @desc The text alignment of the Item List Window.
 * Choices are:  left | center | right
 * @default left
 *
 * @param Item List Visible
 * @desc A JavaScript eval that determines whether the Item List window is visible or not.
 * @default true
 *
 * @param == Enemy List ==
 * @default
 *
 * @param Enemy List X
 * @desc The X position of the Enemy List Window.
 * Can be a number or JavaScript code.
 * @default BattleManager._actorCommandWindow.x - this.width
 *
 * @param Enemy List Y
 * @desc The Y position of the Enemy List Window.
 * Can be a number or JavaScript code.
 * @default BattleManager._actorCommandWindow.y
 *
 * @param Enemy List Rows
 * @desc The number of rows in the Enemy List Window.
 * Can be a number or JavaScript code.
 * @default 4
 *
 * @param Enemy List Cols
 * @desc The number of columns in the Enemy List Window.
 * Can be a number or JavaScript code.
 * @default 1
 *
 * @param Enemy List Width
 * @desc The width of the Enemy List Window.
 * Can be a number or JavaScript code.
 * @default 192
 *
 * @param Enemy List Align
 * @desc The text alignment of the Enemy List Window.
 * Choices are:  left | center | right
 * @default left
 *
 * @param Enemy List Visible
 * @desc A JavaScript eval that determines whether the Enemy List window is visible or not.
 * @default true
 *
 * @param ===== Motions =====
 * @default =================================
 *
 * @param == Motion 1 ==
 * @default
 *
 * @param Motion 1 Window
 * @desc The window that will be using Motion 1.
 * Place the name based on the ones in the Parameters.
 * @default Battle Status
 *
 * @param Motion 1 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 1 to occur.
 * @default BattleManager._phase !== 'start' && BattleManager._partyCommandWindow.isClosed()
 *
 * @param Motion 1 Speed
 * @desc The speed in which the window moves to the offsets of Motion 1. This can be a number or JavaScript code.
 * @default 15
 *
 * @param Motion 1 X Offset
 * @desc The X offset the window moves to when Motion 1 is activated. This can be a number or JavaScript code.
 * @default 0
 *
 * @param Motion 1 Y Offset
 * @desc The Y offset the window moves to when Motion 1 is activated. This can be a number or JavaScript code.
 * @default -BattleManager._statusWindow.height
 *
 * @param == Motion 2 ==
 * @default
 *
 * @param Motion 2 Window
 * @desc The window that will be using Motion 2.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 2 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 2 to occur.
 * @default
 *
 * @param Motion 2 Speed
 * @desc The speed in which the window moves to the offsets of Motion 2. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 2 X Offset
 * @desc The X offset the window moves to when Motion 2 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 2 Y Offset
 * @desc The Y offset the window moves to when Motion 2 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 3 ==
 * @default
 *
 * @param Motion 3 Window
 * @desc The window that will be using Motion 3.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 3 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 3 to occur.
 * @default
 *
 * @param Motion 3 Speed
 * @desc The speed in which the window moves to the offsets of Motion 3. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 3 X Offset
 * @desc The X offset the window moves to when Motion 3 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 3 Y Offset
 * @desc The Y offset the window moves to when Motion 3 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 4 ==
 * @default
 *
 * @param Motion 4 Window
 * @desc The window that will be using Motion 4.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 4 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 4 to occur.
 * @default
 *
 * @param Motion 4 Speed
 * @desc The speed in which the window moves to the offsets of Motion 4. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 4 X Offset
 * @desc The X offset the window moves to when Motion 4 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 4 Y Offset
 * @desc The Y offset the window moves to when Motion 4 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 5 ==
 * @default
 *
 * @param Motion 5 Window
 * @desc The window that will be using Motion 5.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 5 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 5 to occur.
 * @default
 *
 * @param Motion 5 Speed
 * @desc The speed in which the window moves to the offsets of Motion 5. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 5 X Offset
 * @desc The X offset the window moves to when Motion 5 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 5 Y Offset
 * @desc The Y offset the window moves to when Motion 5 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 6 ==
 * @default
 *
 * @param Motion 6 Window
 * @desc The window that will be using Motion 6.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 6 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 6 to occur.
 * @default
 *
 * @param Motion 6 Speed
 * @desc The speed in which the window moves to the offsets of Motion 6. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 6 X Offset
 * @desc The X offset the window moves to when Motion 6 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 6 Y Offset
 * @desc The Y offset the window moves to when Motion 6 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 7 ==
 * @default
 *
 * @param Motion 7 Window
 * @desc The window that will be using Motion 7.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 7 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 7 to occur.
 * @default
 *
 * @param Motion 7 Speed
 * @desc The speed in which the window moves to the offsets of Motion 7. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 7 X Offset
 * @desc The X offset the window moves to when Motion 7 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 7 Y Offset
 * @desc The Y offset the window moves to when Motion 7 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 8 ==
 * @default
 *
 * @param Motion 8 Window
 * @desc The window that will be using Motion 8.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 8 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 8 to occur.
 * @default
 *
 * @param Motion 8 Speed
 * @desc The speed in which the window moves to the offsets of Motion 8. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 8 X Offset
 * @desc The X offset the window moves to when Motion 8 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 8 Y Offset
 * @desc The Y offset the window moves to when Motion 8 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 9 ==
 * @default
 *
 * @param Motion 9 Window
 * @desc The window that will be using Motion 9.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 9 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 9 to occur.
 * @default
 *
 * @param Motion 9 Speed
 * @desc The speed in which the window moves to the offsets of Motion 9. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 9 X Offset
 * @desc The X offset the window moves to when Motion 9 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 9 Y Offset
 * @desc The Y offset the window moves to when Motion 9 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 10 ==
 * @default
 *
 * @param Motion 10 Window
 * @desc The window that will be using Motion 10.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 10 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 10 to occur.
 * @default
 *
 * @param Motion 10 Speed
 * @desc The speed in which the window moves to the offsets of Motion 10. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 10 X Offset
 * @desc The X offset the window moves to when Motion 10 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 10 Y Offset
 * @desc The Y offset the window moves to when Motion 10 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 11 ==
 * @default
 *
 * @param Motion 11 Window
 * @desc The window that will be using Motion 11.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 11 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 11 to occur.
 * @default
 *
 * @param Motion 11 Speed
 * @desc The speed in which the window moves to the offsets of Motion 11. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 11 X Offset
 * @desc The X offset the window moves to when Motion 11 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 11 Y Offset
 * @desc The Y offset the window moves to when Motion 11 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 12 ==
 * @default
 *
 * @param Motion 12 Window
 * @desc The window that will be using Motion 12.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 12 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 12 to occur.
 * @default
 *
 * @param Motion 12 Speed
 * @desc The speed in which the window moves to the offsets of Motion 12. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 12 X Offset
 * @desc The X offset the window moves to when Motion 12 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 12 Y Offset
 * @desc The Y offset the window moves to when Motion 12 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 13 ==
 * @default
 *
 * @param Motion 13 Window
 * @desc The window that will be using Motion 13.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 13 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 13 to occur.
 * @default
 *
 * @param Motion 13 Speed
 * @desc The speed in which the window moves to the offsets of Motion 13. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 13 X Offset
 * @desc The X offset the window moves to when Motion 13 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 13 Y Offset
 * @desc The Y offset the window moves to when Motion 13 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 14 ==
 * @default
 *
 * @param Motion 14 Window
 * @desc The window that will be using Motion 14.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 14 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 14 to occur.
 * @default
 *
 * @param Motion 14 Speed
 * @desc The speed in which the window moves to the offsets of Motion 14. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 14 X Offset
 * @desc The X offset the window moves to when Motion 14 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 14 Y Offset
 * @desc The Y offset the window moves to when Motion 14 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 15 ==
 * @default
 *
 * @param Motion 15 Window
 * @desc The window that will be using Motion 15.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 15 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 15 to occur.
 * @default
 *
 * @param Motion 15 Speed
 * @desc The speed in which the window moves to the offsets of Motion 15. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 15 X Offset
 * @desc The X offset the window moves to when Motion 15 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 15 Y Offset
 * @desc The Y offset the window moves to when Motion 15 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 16 ==
 * @default
 *
 * @param Motion 16 Window
 * @desc The window that will be using Motion 16.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 16 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 16 to occur.
 * @default
 *
 * @param Motion 16 Speed
 * @desc The speed in which the window moves to the offsets of Motion 16. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 16 X Offset
 * @desc The X offset the window moves to when Motion 16 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 16 Y Offset
 * @desc The Y offset the window moves to when Motion 16 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 17 ==
 * @default
 *
 * @param Motion 17 Window
 * @desc The window that will be using Motion 17.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 17 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 17 to occur.
 * @default
 *
 * @param Motion 17 Speed
 * @desc The speed in which the window moves to the offsets of Motion 17. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 17 X Offset
 * @desc The X offset the window moves to when Motion 17 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 17 Y Offset
 * @desc The Y offset the window moves to when Motion 17 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 18 ==
 * @default
 *
 * @param Motion 18 Window
 * @desc The window that will be using Motion 18.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 18 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 18 to occur.
 * @default
 *
 * @param Motion 18 Speed
 * @desc The speed in which the window moves to the offsets of Motion 18. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 18 X Offset
 * @desc The X offset the window moves to when Motion 18 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 18 Y Offset
 * @desc The Y offset the window moves to when Motion 18 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 19 ==
 * @default
 *
 * @param Motion 19 Window
 * @desc The window that will be using Motion 19.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 19 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 19 to occur.
 * @default
 *
 * @param Motion 19 Speed
 * @desc The speed in which the window moves to the offsets of Motion 19. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 19 X Offset
 * @desc The X offset the window moves to when Motion 19 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 19 Y Offset
 * @desc The Y offset the window moves to when Motion 19 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 20 ==
 * @default
 *
 * @param Motion 20 Window
 * @desc The window that will be using Motion 20.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 20 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 20 to occur.
 * @default
 *
 * @param Motion 20 Speed
 * @desc The speed in which the window moves to the offsets of Motion 20. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 20 X Offset
 * @desc The X offset the window moves to when Motion 20 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 20 Y Offset
 * @desc The Y offset the window moves to when Motion 20 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 21 ==
 * @default
 *
 * @param Motion 21 Window
 * @desc The window that will be using Motion 21.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 21 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 21 to occur.
 * @default
 *
 * @param Motion 21 Speed
 * @desc The speed in which the window moves to the offsets of Motion 21. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 21 X Offset
 * @desc The X offset the window moves to when Motion 21 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 21 Y Offset
 * @desc The Y offset the window moves to when Motion 21 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 22 ==
 * @default
 *
 * @param Motion 22 Window
 * @desc The window that will be using Motion 22.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 22 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 22 to occur.
 * @default
 *
 * @param Motion 22 Speed
 * @desc The speed in which the window moves to the offsets of Motion 22. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 22 X Offset
 * @desc The X offset the window moves to when Motion 22 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 22 Y Offset
 * @desc The Y offset the window moves to when Motion 22 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 23 ==
 * @default
 *
 * @param Motion 23 Window
 * @desc The window that will be using Motion 23.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 23 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 23 to occur.
 * @default
 *
 * @param Motion 23 Speed
 * @desc The speed in which the window moves to the offsets of Motion 23. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 23 X Offset
 * @desc The X offset the window moves to when Motion 23 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 23 Y Offset
 * @desc The Y offset the window moves to when Motion 23 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 24 ==
 * @default
 *
 * @param Motion 24 Window
 * @desc The window that will be using Motion 24.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 24 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 24 to occur.
 * @default
 *
 * @param Motion 24 Speed
 * @desc The speed in which the window moves to the offsets of Motion 24. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 24 X Offset
 * @desc The X offset the window moves to when Motion 24 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 24 Y Offset
 * @desc The Y offset the window moves to when Motion 24 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 25 ==
 * @default
 *
 * @param Motion 25 Window
 * @desc The window that will be using Motion 25.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 25 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 25 to occur.
 * @default
 *
 * @param Motion 25 Speed
 * @desc The speed in which the window moves to the offsets of Motion 25. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 25 X Offset
 * @desc The X offset the window moves to when Motion 25 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 25 Y Offset
 * @desc The Y offset the window moves to when Motion 25 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 26 ==
 * @default
 *
 * @param Motion 26 Window
 * @desc The window that will be using Motion 26.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 26 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 26 to occur.
 * @default
 *
 * @param Motion 26 Speed
 * @desc The speed in which the window moves to the offsets of Motion 26. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 26 X Offset
 * @desc The X offset the window moves to when Motion 26 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 26 Y Offset
 * @desc The Y offset the window moves to when Motion 26 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 27 ==
 * @default
 *
 * @param Motion 27 Window
 * @desc The window that will be using Motion 27.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 27 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 27 to occur.
 * @default
 *
 * @param Motion 27 Speed
 * @desc The speed in which the window moves to the offsets of Motion 27. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 27 X Offset
 * @desc The X offset the window moves to when Motion 27 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 27 Y Offset
 * @desc The Y offset the window moves to when Motion 27 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 28 ==
 * @default
 *
 * @param Motion 28 Window
 * @desc The window that will be using Motion 28.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 28 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 28 to occur.
 * @default
 *
 * @param Motion 28 Speed
 * @desc The speed in which the window moves to the offsets of Motion 28. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 28 X Offset
 * @desc The X offset the window moves to when Motion 28 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 28 Y Offset
 * @desc The Y offset the window moves to when Motion 28 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 29 ==
 * @default
 *
 * @param Motion 29 Window
 * @desc The window that will be using Motion 29.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 29 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 29 to occur.
 * @default
 *
 * @param Motion 29 Speed
 * @desc The speed in which the window moves to the offsets of Motion 29. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 29 X Offset
 * @desc The X offset the window moves to when Motion 29 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 29 Y Offset
 * @desc The Y offset the window moves to when Motion 29 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 30 ==
 * @default
 *
 * @param Motion 30 Window
 * @desc The window that will be using Motion 30.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 30 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 30 to occur.
 * @default
 *
 * @param Motion 30 Speed
 * @desc The speed in which the window moves to the offsets of Motion 30. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 30 X Offset
 * @desc The X offset the window moves to when Motion 30 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 30 Y Offset
 * @desc The Y offset the window moves to when Motion 30 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 31 ==
 * @default
 *
 * @param Motion 31 Window
 * @desc The window that will be using Motion 31.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 31 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 31 to occur.
 * @default
 *
 * @param Motion 31 Speed
 * @desc The speed in which the window moves to the offsets of Motion 31. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 31 X Offset
 * @desc The X offset the window moves to when Motion 31 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 31 Y Offset
 * @desc The Y offset the window moves to when Motion 31 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 32 ==
 * @default
 *
 * @param Motion 32 Window
 * @desc The window that will be using Motion 32.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 32 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 32 to occur.
 * @default
 *
 * @param Motion 32 Speed
 * @desc The speed in which the window moves to the offsets of Motion 32. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 32 X Offset
 * @desc The X offset the window moves to when Motion 32 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 32 Y Offset
 * @desc The Y offset the window moves to when Motion 32 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 33 ==
 * @default
 *
 * @param Motion 33 Window
 * @desc The window that will be using Motion 33.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 33 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 33 to occur.
 * @default
 *
 * @param Motion 33 Speed
 * @desc The speed in which the window moves to the offsets of Motion 33. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 33 X Offset
 * @desc The X offset the window moves to when Motion 33 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 33 Y Offset
 * @desc The Y offset the window moves to when Motion 33 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 34 ==
 * @default
 *
 * @param Motion 34 Window
 * @desc The window that will be using Motion 34.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 34 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 34 to occur.
 * @default
 *
 * @param Motion 34 Speed
 * @desc The speed in which the window moves to the offsets of Motion 34. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 34 X Offset
 * @desc The X offset the window moves to when Motion 34 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 34 Y Offset
 * @desc The Y offset the window moves to when Motion 34 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 35 ==
 * @default
 *
 * @param Motion 35 Window
 * @desc The window that will be using Motion 35.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 35 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 35 to occur.
 * @default
 *
 * @param Motion 35 Speed
 * @desc The speed in which the window moves to the offsets of Motion 35. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 35 X Offset
 * @desc The X offset the window moves to when Motion 35 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 35 Y Offset
 * @desc The Y offset the window moves to when Motion 35 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 36 ==
 * @default
 *
 * @param Motion 36 Window
 * @desc The window that will be using Motion 36.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 36 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 36 to occur.
 * @default
 *
 * @param Motion 36 Speed
 * @desc The speed in which the window moves to the offsets of Motion 36. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 36 X Offset
 * @desc The X offset the window moves to when Motion 36 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 36 Y Offset
 * @desc The Y offset the window moves to when Motion 36 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 37 ==
 * @default
 *
 * @param Motion 37 Window
 * @desc The window that will be using Motion 37.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 37 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 37 to occur.
 * @default
 *
 * @param Motion 37 Speed
 * @desc The speed in which the window moves to the offsets of Motion 37. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 37 X Offset
 * @desc The X offset the window moves to when Motion 37 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 37 Y Offset
 * @desc The Y offset the window moves to when Motion 37 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 38 ==
 * @default
 *
 * @param Motion 38 Window
 * @desc The window that will be using Motion 38.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 38 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 38 to occur.
 * @default
 *
 * @param Motion 38 Speed
 * @desc The speed in which the window moves to the offsets of Motion 38. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 38 X Offset
 * @desc The X offset the window moves to when Motion 38 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 38 Y Offset
 * @desc The Y offset the window moves to when Motion 38 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 39 ==
 * @default
 *
 * @param Motion 39 Window
 * @desc The window that will be using Motion 39.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 39 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 39 to occur.
 * @default
 *
 * @param Motion 39 Speed
 * @desc The speed in which the window moves to the offsets of Motion 39. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 39 X Offset
 * @desc The X offset the window moves to when Motion 39 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 39 Y Offset
 * @desc The Y offset the window moves to when Motion 39 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 40 ==
 * @default
 *
 * @param Motion 40 Window
 * @desc The window that will be using Motion 40.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 40 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 40 to occur.
 * @default
 *
 * @param Motion 40 Speed
 * @desc The speed in which the window moves to the offsets of Motion 40. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 40 X Offset
 * @desc The X offset the window moves to when Motion 40 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 40 Y Offset
 * @desc The Y offset the window moves to when Motion 40 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 41 ==
 * @default
 *
 * @param Motion 41 Window
 * @desc The window that will be using Motion 41.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 41 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 41 to occur.
 * @default
 *
 * @param Motion 41 Speed
 * @desc The speed in which the window moves to the offsets of Motion 41. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 41 X Offset
 * @desc The X offset the window moves to when Motion 41 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 41 Y Offset
 * @desc The Y offset the window moves to when Motion 41 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 42 ==
 * @default
 *
 * @param Motion 42 Window
 * @desc The window that will be using Motion 42.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 42 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 42 to occur.
 * @default
 *
 * @param Motion 42 Speed
 * @desc The speed in which the window moves to the offsets of Motion 42. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 42 X Offset
 * @desc The X offset the window moves to when Motion 42 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 42 Y Offset
 * @desc The Y offset the window moves to when Motion 42 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 43 ==
 * @default
 *
 * @param Motion 43 Window
 * @desc The window that will be using Motion 43.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 43 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 43 to occur.
 * @default
 *
 * @param Motion 43 Speed
 * @desc The speed in which the window moves to the offsets of Motion 43. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 43 X Offset
 * @desc The X offset the window moves to when Motion 43 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 43 Y Offset
 * @desc The Y offset the window moves to when Motion 43 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 44 ==
 * @default
 *
 * @param Motion 44 Window
 * @desc The window that will be using Motion 44.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 44 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 44 to occur.
 * @default
 *
 * @param Motion 44 Speed
 * @desc The speed in which the window moves to the offsets of Motion 44. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 44 X Offset
 * @desc The X offset the window moves to when Motion 44 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 44 Y Offset
 * @desc The Y offset the window moves to when Motion 44 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 45 ==
 * @default
 *
 * @param Motion 45 Window
 * @desc The window that will be using Motion 45.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 45 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 45 to occur.
 * @default
 *
 * @param Motion 45 Speed
 * @desc The speed in which the window moves to the offsets of Motion 45. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 45 X Offset
 * @desc The X offset the window moves to when Motion 45 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 45 Y Offset
 * @desc The Y offset the window moves to when Motion 45 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 46 ==
 * @default
 *
 * @param Motion 46 Window
 * @desc The window that will be using Motion 46.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 46 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 46 to occur.
 * @default
 *
 * @param Motion 46 Speed
 * @desc The speed in which the window moves to the offsets of Motion 46. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 46 X Offset
 * @desc The X offset the window moves to when Motion 46 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 46 Y Offset
 * @desc The Y offset the window moves to when Motion 46 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 47 ==
 * @default
 *
 * @param Motion 47 Window
 * @desc The window that will be using Motion 47.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 47 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 47 to occur.
 * @default
 *
 * @param Motion 47 Speed
 * @desc The speed in which the window moves to the offsets of Motion 47. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 47 X Offset
 * @desc The X offset the window moves to when Motion 47 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 47 Y Offset
 * @desc The Y offset the window moves to when Motion 47 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 48 ==
 * @default
 *
 * @param Motion 48 Window
 * @desc The window that will be using Motion 48.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 48 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 48 to occur.
 * @default
 *
 * @param Motion 48 Speed
 * @desc The speed in which the window moves to the offsets of Motion 48. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 48 X Offset
 * @desc The X offset the window moves to when Motion 48 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 48 Y Offset
 * @desc The Y offset the window moves to when Motion 48 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 49 ==
 * @default
 *
 * @param Motion 49 Window
 * @desc The window that will be using Motion 49.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 49 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 49 to occur.
 * @default
 *
 * @param Motion 49 Speed
 * @desc The speed in which the window moves to the offsets of Motion 49. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 49 X Offset
 * @desc The X offset the window moves to when Motion 49 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 49 Y Offset
 * @desc The Y offset the window moves to when Motion 49 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param == Motion 50 ==
 * @default
 *
 * @param Motion 50 Window
 * @desc The window that will be using Motion 50.
 * Place the name based on the ones in the Parameters.
 * @default
 *
 * @param Motion 50 Condition
 * @desc The JavaScript condition that, when true, will cause Motion 50 to occur.
 * @default
 *
 * @param Motion 50 Speed
 * @desc The speed in which the window moves to the offsets of Motion 50. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 50 X Offset
 * @desc The X offset the window moves to when Motion 50 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @param Motion 50 Y Offset
 * @desc The Y offset the window moves to when Motion 50 is activated. This can be a number or JavaScript code.
 * @default
 *
 * @help
 *
 * Battle GUI Core
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin allows developers to customize the window set up of battles 
 * within their game.
 *
 *
 * ==============================================================================
 *  Window Properties
 * ==============================================================================
 *
 * There are seven properties that can be customized for the windows:
 *
 *  -  X
 *  -  Y
 *  -  Rows
 *  -  Cols
 *  -  Width
 *  -  Align
 *  -  Visible
 *
 *
 * ===========================
 *   X
 * ===========================
 *
 * The X property determines the X position of the window.
 * If the window is not at that position, then it will either instantly move
 * to the position or slide to it based on how far it is.
 *
 *
 * ===========================
 *   Y
 * ===========================
 *
 * The Y property determines the Y position of the window.
 * If the window is not at that position, then it will either instantly move
 * to the position or slide to it based on how far it is.
 *
 *
 * ===========================
 *   Rows
 * ===========================
 *
 * The Rows property determines the amount of rows on the window.
 * The number of rows will determine the number shown at once.
 * If there are more choices than there can be shown, then the number of
 * rows total will be greater than normal.
 *
 *
 * ===========================
 *   Cols
 * ===========================
 *
 * The Cols property determines the amount of columns on the window.
 * The column count will always be constant unless there are less choices
 * than there are columns.
 *
 *
 * ===========================
 *   Width
 * ===========================
 *
 * The Width property determines the width of the window.
 *
 *
 * ===========================
 *   Align
 * ===========================
 *
 * The Align property determines the alignment of the text of the choices.
 *
 *
 * ===========================
 *   Visible
 * ===========================
 *
 * The Visible property determines the whether the window is visible.
 * Visibility can be updated dynamically since this property is mainly used with
 * JavaScript conditions.
 * However, you can input 'true' to make it use the default visibility settings.
 *
 *
 * ==============================================================================
 *  Motions
 * ==============================================================================
 *
 * Motions allow you to make windows move in a certain way under certain
 * conditions. You can create conditions based on other windows and 
 * BattleManager phases.
 *
 *
 *
 * In order to check whether a phase is active or not, do:
 *
 *   BattleManager._phase === 'phase-name'
 *
 * Here is a list of all the phases:
 *
 *  -  init
 *  -  start
 *  -  input
 *  -  turn
 *  -  action
 *  -  turnEnd
 *  -  aborting
 *  -  battleEnd
 *
 *
 *
 * You can also check various properties of the other windows:
 *
 *  -  BattleManager._statusWindow
 *  -  BattleManager._actorCommandWindow
 *  -  BattleManager._partyCommandWindow
 *  -  BattleManager._skillWindow
 *  -  BattleManager._itemWindow
 *  -  BattleManager._enemyWindow
 *  -  BattleManager._actorWindow
 *  -  BattleManager._helpWindow
 *
 * For example:
 *
 *   BattleManager._statusWindow.x
 *   BattleManager._statusWindow.y
 *   BattleManager._statusWindow.width
 *   BattleManager._statusWindow.height
 *   BattleManager._statusWindow.isClosed()
 *   BattleManager._statusWindow.isOpen()
 *   BattleManager._statusWindow.visible
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
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
SRD.BattleGUICore = SRD.BattleGUICore || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle GUI Core"] = 1.00;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.BattleStatusCustomizer
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_BattleGUICore');

_.forceScreens = String(params['Force Within Screen']).split(/\s*,\s*/);
for(let i = 0; i < _.forceScreens.length; i++) _.forceScreens[i] = _.forceScreens[i].toLowerCase();
_.motionSpeed = String(params['Motion Reset Speed']);
_.moveDistance = parseInt(params['Instant Move Distance']);

_.battleStatusMove = String(params['Auto-Move Battle Status']).trim().toLowerCase() === 'true';
_.battleStatusX = String(params['Battle Status X']);
_.battleStatusY = String(params['Battle Status Y']);
_.battleStatusWidth = String(params['Battle Status Width']);
_.battleStatusVisible = String(params['Battle Status Visible']);

_.partyCommandX = String(params['Party Command X']);
_.partyCommandY = String(params['Party Command Y']);
_.partyCommandRows = String(params['Party Command Rows']);
_.partyCommandCols = String(params['Party Command Cols']);
_.partyCommandWidth = String(params['Party Command Width']);
_.partyCommandAlign = String(params['Party Command Align']);
_.partyCommandVisible = String(params['Party Command Visible']);

_.actorCommandX = String(params['Actor Command X']);
_.actorCommandY = String(params['Actor Command Y']);
_.actorCommandRows = String(params['Actor Command Rows']);
_.actorCommandCols = String(params['Actor Command Cols']);
_.actorCommandWidth = String(params['Actor Command Width']);
_.actorCommandAlign = String(params['Actor Command Align']);
_.actorCommandVisible = String(params['Actor Command Visible']);

_.skillListX = String(params['Skill List X']);
_.skillListY = String(params['Skill List Y']);
_.skillListRows = String(params['Skill List Rows']);
_.skillListCols = String(params['Skill List Cols']);
_.skillListWidth = String(params['Skill List Width']);
_.skillListAlign = String(params['Skill List Align']);
_.skillListVisible = String(params['Skill List Visible']);

_.itemListX = String(params['Item List X']);
_.itemListY = String(params['Item List Y']);
_.itemListRows = String(params['Item List Rows']);
_.itemListCols = String(params['Item List Cols']);
_.itemListWidth = String(params['Item List Width']);
_.itemListAlign = String(params['Item List Align']);
_.itemListVisible = String(params['Item List Visible']);

_.enemyListX = String(params['Enemy List X']);
_.enemyListY = String(params['Enemy List Y']);
_.enemyListRows = String(params['Enemy List Rows']);
_.enemyListCols = String(params['Enemy List Cols']);
_.enemyListWidth = String(params['Enemy List Width']);
_.enemyListAlign = String(params['Enemy List Align']);
_.enemyListVisible = String(params['Enemy List Visible']);

_.motions = {};
for(let i = 1; i <= 1; i++) {
	const t = String(params['Motion ' + i + ' Window']).toLowerCase();
	const c = String(params['Motion ' + i + ' Condition']);
	const s = String(params['Motion ' + i + ' Speed']);
	const x = String(params['Motion ' + i + ' X Offset']);
	const y = String(params['Motion ' + i + ' Y Offset']);
	if(t.trim().length > 0 && c.trim().length > 0 && s.trim().length > 0 && x.trim().length > 0 && y.trim().length > 0) {
		if(!_.motions[t]) _.motions[t] = [];
		const temp = {};
		temp.condition = c;
		temp.speed = s;
		temp.x = x;
		temp.y = y;
		_.motions[t].push(temp);
	}
}

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

const _BattleManager_initMembers = BattleManager.initMembers;
BattleManager.initMembers = function() {
	_BattleManager_initMembers.apply(this, arguments);
	this._statusWindows = [];
	this._actorCommandWindow = null;
	this._partyCommandWindow = null;
	this._helpWindow = null;
};

BattleManager.setStatusWindow = function(statusWindow) {
	this._statusWindow = statusWindow;
};

BattleManager.setActorCommandWindow = function(actorCommandWindow) {
	this._actorCommandWindow = actorCommandWindow;
};

BattleManager.setActorListWindow = function(actorWindow) {
	this._actorWindow = actorWindow;
};

BattleManager.setSkillListWindow = function(skillList) {
	this._skillWindow = skillList;
};

BattleManager.setPartyCommandWindow = function(partyCommandWindow) {
	this._partyCommandWindow = partyCommandWindow;
};

BattleManager.setEnemyListWindow = function(enemyList) {
	this._enemyList = enemyList;
};

BattleManager.setItemListWindow = function(itemList) {
	this._itemWindow = itemList;
};

BattleManager.setHelpWindow = function(helpWindow) {
	this._helpWindow = helpWindow;
};

BattleManager.getCurrentActorSprite = function() {
	return (this._actorIndex > -1) ? this._spriteset._actorSprites[this._actorIndex] : new Sprite();
};

//-----------------------------------------------------------------------------
// Scene_Battle
//-----------------------------------------------------------------------------

const _Scene_Battle_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_Scene_Battle_createDisplayObjects.apply(this, arguments);
	BattleManager.setStatusWindow(this._statusWindow);
	BattleManager.setActorCommandWindow(this._actorCommandWindow);
	BattleManager.setPartyCommandWindow(this._partyCommandWindow);
	BattleManager.setSkillListWindow(this._skillWindow);
	BattleManager.setItemListWindow(this._itemWindow);
	BattleManager.setEnemyListWindow(this._enemyWindow);
	BattleManager.setActorListWindow(this._actorWindow);
	BattleManager.setHelpWindow(this._helpWindow);
	BattleManager._bsc_windowsSet = true;
};

const _Scene_Battle_commandFight = Scene_Battle.prototype.commandFight;
Scene_Battle.prototype.commandFight = function() {
	_Scene_Battle_commandFight.apply(this, arguments);
	this._actorCommandWindow.instantPlacement();
};

//-----------------------------------------------------------------------------
// Consistent Window Functions
//-----------------------------------------------------------------------------

_.updateMovement = function() {
	if(Math.abs(this._trueX - this._goalX) > _.moveDistance || Math.abs(this._trueY - this._goalY) > _.moveDistance) {
		this.instantPlacement();
	}

	if(this._trueX < this._goalX) {
		this._trueX += 4;
		if(this._trueX > this._goalX) this._trueX = this._goalX;
	} else if(this._trueX > this._goalX) {
		this._trueX -= 4;
		if(this._trueX < this._goalX) this._trueX = this._goalX;
	}

	if(this._trueY < this._goalY) {
		this._trueY += 4;
		if(this._trueY > this._goalY) this._trueY = this._goalY;
	} else if(this._trueY > this._goalY) {
		this._trueY -= 4;
		if(this._trueY < this._goalY) this._trueY = this._goalY;
	}

	this.updateOffsetConditions();
	this.updateOffset();
	this.updateScreenRestrict();

	this.x = this._trueX + this._offsetX;
	this.y = this._trueY + this._offsetY;
};

_.updateScreenRestrict = function() {
	if(this._stayWithinScreen) {
		while(this._trueX + this._offsetX + this.width > Graphics.boxWidth) {
			this._trueX--;
		}
		while(this._trueX + this._offsetX < 0) {
			this._trueX++;
		}
		while(this._trueY + this._offsetY + this.height > Graphics.boxHeight) {
			this._trueY--;
		}
		while(this._trueY + this._offsetY < 0) {
			this._trueY++;
		}
	}
};

_.updateOffset = function() {
	if(this._offsetX < this._offsetXGoal) {
		this._offsetX += this._offsetSpeed;
		if(this._offsetX > this._offsetXGoal) this._offsetX = this._offsetXGoal;
	} else if(this._offsetX > this._offsetXGoal) {
		this._offsetX -= this._offsetSpeed;
		if(this._offsetX < this._offsetXGoal) this._offsetX = this._offsetXGoal;
	}

	if(this._offsetY < this._offsetYGoal) {
		this._offsetY += this._offsetSpeed;
		if(this._offsetY > this._offsetYGoal) this._offsetY = this._offsetYGoal;
	} else if(this._offsetY > this._offsetYGoal) {
		this._offsetY -= this._offsetSpeed;
		if(this._offsetY < this._offsetYGoal) this._offsetY = this._offsetYGoal;
	}
};

_.updateOffsetConditions = function() {
	let isOn = false;
	if(this._motionsInfos) {
		for(let i = 0; i < this._motionsInfos.length; i++) {
			const info = this._motionsInfos[i];
			if(info && eval(info.condition)) {
				this._offsetXGoal = eval(info.x);
				this._offsetYGoal = eval(info.y);
				this._offsetSpeed = eval(info.speed);
				this._offsetOpenness = eval(info.open);
				isOn = true;
				break;
			}
		}
		if(!isOn) {
			this._offsetXGoal = 0;
			this._offsetYGoal = 0;
			this._offsetSpeed = eval(_.motionSpeed);
		}
	}
};

_.instantPlacement = function() {
	this._trueX = this._goalX;
	this._trueY = this._goalY;
};

_.initializePositions = function() {
	this._offsetX = 0;
	this._offsetY = 0;
	this._offsetXGoal = 0;
	this._offsetYGoal = 0;
	this._offsetSpeed = 0;
	this._trueX = this.x;
	this._trueY = this.y;
};

//-----------------------------------------------------------------------------
// Window_PartyCommand
//-----------------------------------------------------------------------------

if(!Imported["SumRndmDde Battle Status Customizer"]) {

if(!_.battleStatusMove) {

Scene_Battle.prototype.updateWindowPositions = function() {};

}

const _Window_BattleStatus_initialize = Window_BattleStatus.prototype.initialize;
Window_BattleStatus.prototype.initialize = function() {
	_Window_BattleStatus_initialize.apply(this, arguments);
	this.initializePositions();
	if(_.motions['battle status']) this._motionsInfos = _.motions['battle status'];
	this._stayWithinScreen = Boolean(_.forceScreens.contains('battle status'));
};

const _Window_BattleStatus_update = Window_BattleStatus.prototype.update;
Window_BattleStatus.prototype.update = function() {
	_Window_BattleStatus_update.apply(this, arguments);
	if(BattleManager._bsc_windowsSet) this.updatePlacement();
};

Window_BattleStatus.prototype.updatePlacement = function() {
	this._goalX = eval(_.battleStatusX);
	this._goalY = eval(_.battleStatusY);
	if(_.battleStatusVisible !== 'true') this.visible = eval(_.battleStatusVisible);
	this.updateMovement();
};

Window_BattleStatus.prototype.instantPlacement = _.instantPlacement;
Window_BattleStatus.prototype.updateMovement = _.updateMovement;
Window_BattleStatus.prototype.initializePositions = _.initializePositions;
Window_BattleStatus.prototype.updateOffset = _.updateOffset;
Window_BattleStatus.prototype.updateOffsetConditions = _.updateOffsetConditions;
Window_BattleStatus.prototype.updateScreenRestrict = _.updateScreenRestrict;

Window_BattleStatus.prototype.windowWidth = function() {
	return eval(_.battleStatusWidth);
};

}

//-----------------------------------------------------------------------------
// Window_PartyCommand
//-----------------------------------------------------------------------------

const _Window_PartyCommand_initialize = Window_PartyCommand.prototype.initialize;
Window_PartyCommand.prototype.initialize = function() {
	_Window_PartyCommand_initialize.apply(this, arguments);
	this.initializePositions();
	if(_.motions['party command']) this._motionsInfos = _.motions['party command'];
	this._stayWithinScreen = Boolean(_.forceScreens.contains('party command'));
};

const _Window_PartyCommand_update = Window_PartyCommand.prototype.update;
Window_PartyCommand.prototype.update = function() {
	_Window_PartyCommand_update.apply(this, arguments);
	if(BattleManager._bsc_windowsSet) this.updatePlacement();
};

Window_PartyCommand.prototype.updatePlacement = function() {
	this._goalX = eval(_.partyCommandX);
	this._goalY = eval(_.partyCommandY);
	if(_.partyCommandVisible !== 'true') this.visible = eval(_.partyCommandVisible);
	this.updateMovement();
};

Window_PartyCommand.prototype.instantPlacement = _.instantPlacement;
Window_PartyCommand.prototype.updateMovement = _.updateMovement;
Window_PartyCommand.prototype.initializePositions = _.initializePositions;
Window_PartyCommand.prototype.updateOffset = _.updateOffset;
Window_PartyCommand.prototype.updateOffsetConditions = _.updateOffsetConditions;
Window_PartyCommand.prototype.updateScreenRestrict = _.updateScreenRestrict;

Window_PartyCommand.prototype.numVisibleRows = function() {
	return eval(_.partyCommandRows);
};

Window_PartyCommand.prototype.maxCols = function() {
	return eval(_.partyCommandCols);
};

Window_PartyCommand.prototype.windowWidth = function() {
	return eval(_.partyCommandWidth);
};

Window_PartyCommand.prototype.itemTextAlign = function() {
	return _.partyCommandAlign;
};

//-----------------------------------------------------------------------------
// Window_ActorCommand
//-----------------------------------------------------------------------------

const _Window_ActorCommand_initialize = Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function() {
	_Window_ActorCommand_initialize.apply(this, arguments);
	this.initializePositions();
	if(_.motions['actor command']) this._motionsInfos = _.motions['actor command'];
	this._stayWithinScreen = Boolean(_.forceScreens.contains('actor command'));
};

const _Window_ActorCommand_update = Window_ActorCommand.prototype.update;
Window_ActorCommand.prototype.update = function() {
	_Window_ActorCommand_update.apply(this, arguments);
	if(BattleManager._bsc_windowsSet) this.updatePlacement();
};

Window_ActorCommand.prototype.updatePlacement = function() {
	this._goalX = eval(_.actorCommandX);
	this._goalY = eval(_.actorCommandY);
	if(_.actorCommandVisible !== 'true') this.visible = eval(_.actorCommandVisible);
	this.updateMovement();
};

Window_ActorCommand.prototype.instantPlacement = _.instantPlacement;
Window_ActorCommand.prototype.updateMovement = _.updateMovement;
Window_ActorCommand.prototype.initializePositions = _.initializePositions;
Window_ActorCommand.prototype.updateOffset = _.updateOffset;
Window_ActorCommand.prototype.updateOffsetConditions = _.updateOffsetConditions;
Window_ActorCommand.prototype.updateScreenRestrict = _.updateScreenRestrict;

Window_ActorCommand.prototype.numVisibleRows = function() {
	return eval(_.actorCommandRows);
};

Window_ActorCommand.prototype.maxCols = function() {
	return eval(_.actorCommandCols);
};

Window_ActorCommand.prototype.windowWidth = function() {
	return eval(_.actorCommandWidth);
};

Window_ActorCommand.prototype.itemTextAlign = function() {
	return _.actorCommandAlign;
};

//-----------------------------------------------------------------------------
// Window_BattleSkill
//-----------------------------------------------------------------------------

const _Window_BattleSkill_initialize = Window_BattleSkill.prototype.initialize;
Window_BattleSkill.prototype.initialize = function() {
	_Window_BattleSkill_initialize.apply(this, arguments);
	this.height = this.fittingHeight(this.numVisibleRows());
	this.initializePositions();
	if(_.motions['skill list']) this._motionsInfos = _.motions['skill list'];
	this._stayWithinScreen = Boolean(_.forceScreens.contains('skill list'));
};

const _Window_BattleSkill_update = Window_BattleSkill.prototype.update;
Window_BattleSkill.prototype.update = function() {
	_Window_BattleSkill_update.apply(this, arguments);
	if(BattleManager._bsc_windowsSet) this.updatePlacement();
};

Window_BattleSkill.prototype.updatePlacement = function() {
	this._goalX = eval(_.skillListX);
	this._goalY = eval(_.skillListY);
	if(_.skillListVisible !== 'true') this.visible = eval(_.skillListVisible);
	this.updateMovement();
};

Window_BattleSkill.prototype.instantPlacement = _.instantPlacement;
Window_BattleSkill.prototype.updateMovement = _.updateMovement;
Window_BattleSkill.prototype.initializePositions = _.initializePositions;
Window_BattleSkill.prototype.updateOffset = _.updateOffset;
Window_BattleSkill.prototype.updateOffsetConditions = _.updateOffsetConditions;
Window_BattleSkill.prototype.updateScreenRestrict = _.updateScreenRestrict;

Window_BattleSkill.prototype.numVisibleRows = function() {
	return eval(_.skillListRows);
};

Window_BattleSkill.prototype.maxCols = function() {
	return eval(_.skillListCols);
};

Window_BattleSkill.prototype.windowWidth = function() {
	return eval(_.skillListWidth);
};

Window_BattleSkill.prototype.itemTextAlign = function() {
	return _.skillListAlign;
};

//-----------------------------------------------------------------------------
// Window_BattleItem
//-----------------------------------------------------------------------------

const _Window_BattleItem_initialize = Window_BattleItem.prototype.initialize;
Window_BattleItem.prototype.initialize = function() {
	_Window_BattleItem_initialize.apply(this, arguments);
	this.height = this.fittingHeight(this.numVisibleRows());
	this.initializePositions();
	if(_.motions['item list']) this._motionsInfos = _.motions['item list'];
	this._stayWithinScreen = Boolean(_.forceScreens.contains('item list'));
};

const _Window_BattleItem_update = Window_BattleItem.prototype.update;
Window_BattleItem.prototype.update = function() {
	_Window_BattleItem_update.apply(this, arguments);
	if(BattleManager._bsc_windowsSet) this.updatePlacement();
};

Window_BattleItem.prototype.updatePlacement = function() {
	this._goalX = eval(_.itemListX);
	this._goalY = eval(_.itemListY);
	if(_.itemListVisible !== 'true') this.visible = eval(_.itemListVisible);
	this.updateMovement();
};

Window_BattleItem.prototype.instantPlacement = _.instantPlacement;
Window_BattleItem.prototype.updateMovement = _.updateMovement;
Window_BattleItem.prototype.initializePositions = _.initializePositions;
Window_BattleItem.prototype.updateOffset = _.updateOffset;
Window_BattleItem.prototype.updateOffsetConditions = _.updateOffsetConditions;
Window_BattleItem.prototype.updateScreenRestrict = _.updateScreenRestrict;

Window_BattleItem.prototype.numVisibleRows = function() {
	return eval(_.itemListRows);
};

Window_BattleItem.prototype.maxCols = function() {
	return eval(_.itemListCols);
};

Window_BattleItem.prototype.windowWidth = function() {
	return eval(_.itemListWidth);
};

Window_BattleItem.prototype.itemTextAlign = function() {
	return _.itemListAlign;
};

//-----------------------------------------------------------------------------
// Window_BattleEnemy
//-----------------------------------------------------------------------------

if(!(Imported.YEP_BattleEngineCore && Yanfly.Param.BECEnemySelect)) {

const _Window_BattleEnemy_initialize = Window_BattleEnemy.prototype.initialize;
Window_BattleEnemy.prototype.initialize = function() {
	_Window_BattleEnemy_initialize.apply(this, arguments);
	this.initializePositions();
	if(_.motions['enemy list']) this._motionsInfos = _.motions['enemy list'];
	this._stayWithinScreen = Boolean(_.forceScreens.contains('enemy list'));
};

const _Window_BattleEnemy_update = Window_BattleEnemy.prototype.update;
Window_BattleEnemy.prototype.update = function() {
	_Window_BattleEnemy_update.apply(this, arguments);
	if(BattleManager._bsc_windowsSet) this.updatePlacement();
};

Window_BattleEnemy.prototype.updatePlacement = function() {
	this._goalX = eval(_.enemyListX);
	this._goalY = eval(_.enemyListY);
	if(_.enemyListVisible !== 'true') this.visible = eval(_.enemyListVisible);
	this.updateMovement();
};

Window_BattleEnemy.prototype.instantPlacement = _.instantPlacement;
Window_BattleEnemy.prototype.updateMovement = _.updateMovement;
Window_BattleEnemy.prototype.initializePositions = _.initializePositions;
Window_BattleEnemy.prototype.updateOffset = _.updateOffset;
Window_BattleEnemy.prototype.updateOffsetConditions = _.updateOffsetConditions;
Window_BattleEnemy.prototype.updateScreenRestrict = _.updateScreenRestrict;

Window_BattleEnemy.prototype.numVisibleRows = function() {
	return eval(_.enemyListRows);
};

Window_BattleEnemy.prototype.maxCols = function() {
	return eval(_.enemyListCols);
};

Window_BattleEnemy.prototype.windowWidth = function() {
	return eval(_.enemyListWidth);
};

Window_BattleEnemy.prototype.itemTextAlign = function() {
	return _.enemyListAlign;
};

}

})(SRD.BattleGUICore);