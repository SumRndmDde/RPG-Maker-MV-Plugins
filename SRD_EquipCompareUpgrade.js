/*:
 * @plugindesc Allows for developers to customize all the visible parameters that can be seen on the Equip Screen.
 * @author SumRndmDde
 *
 * @param Default Pos Color
 * @desc The default color used for positive stat gains.
 * @default #80ff80
 *
 * @param Default Neg Color
 * @desc The default color used for negative stat gains.
 * @default #c08080
 *
 * @param Window Width
 * @desc The width of the Stat Comparison window.
 * @default 356
 *
 * @param Font Size
 * @desc The font size of the stat comparisons.
 * @default 24
 *
 * @param Line Padding
 * @desc The padding in between each line.
 * @default 8
 *
 * @param == Stat 1 ==
 * @default
 *
 * @param Stat 1 Name
 * @desc The name of the stat that is shown on the window.
 * @default Max HP
 *
 * @param Stat 1 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mhp
 *
 * @param Stat 1 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 2 ==
 * @default
 *
 * @param Stat 2 Name
 * @desc The name of the stat that is shown on the window.
 * @default Max MP
 *
 * @param Stat 2 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mmp
 *
 * @param Stat 2 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 3 ==
 * @default
 *
 * @param Stat 3 Name
 * @desc The name of the stat that is shown on the window.
 * @default Attack
 *
 * @param Stat 3 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.atk
 *
 * @param Stat 3 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 4 ==
 * @default
 *
 * @param Stat 4 Name
 * @desc The name of the stat that is shown on the window.
 * @default Defense
 *
 * @param Stat 4 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.def
 *
 * @param Stat 4 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 5 ==
 * @default
 *
 * @param Stat 5 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Attack
 *
 * @param Stat 5 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mat
 *
 * @param Stat 5 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 6 ==
 * @default
 *
 * @param Stat 6 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Defense
 *
 * @param Stat 6 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mdf
 *
 * @param Stat 6 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 7 ==
 * @default
 *
 * @param Stat 7 Name
 * @desc The name of the stat that is shown on the window.
 * @default Agility
 *
 * @param Stat 7 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.agi
 *
 * @param Stat 7 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 8 ==
 * @default
 *
 * @param Stat 8 Name
 * @desc The name of the stat that is shown on the window.
 * @default Luck
 *
 * @param Stat 8 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.luk
 *
 * @param Stat 8 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 9 ==
 * @default
 *
 * @param Stat 9 Name
 * @desc The name of the stat that is shown on the window.
 * @default Hit Rate
 *
 * @param Stat 9 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.hit * 100)
 *
 * @param Stat 9 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 10 ==
 * @default
 *
 * @param Stat 10 Name
 * @desc The name of the stat that is shown on the window.
 * @default Evade Rate
 *
 * @param Stat 10 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.eva * 100)
 *
 * @param Stat 10 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 11 ==
 * @default
 *
 * @param Stat 11 Name
 * @desc The name of the stat that is shown on the window.
 * @default Critical Rate
 *
 * @param Stat 11 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.cri * 100)
 *
 * @param Stat 11 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 12 ==
 * @default
 *
 * @param Stat 12 Name
 * @desc The name of the stat that is shown on the window.
 * @default Critical Evade
 *
 * @param Stat 12 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.cev * 100)
 *
 * @param Stat 12 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 13 ==
 * @default
 *
 * @param Stat 13 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Evasion
 *
 * @param Stat 13 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mev * 100)
 *
 * @param Stat 13 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 14 ==
 * @default
 *
 * @param Stat 14 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Reflect
 *
 * @param Stat 14 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mrf * 100)
 *
 * @param Stat 14 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 15 ==
 * @default
 *
 * @param Stat 15 Name
 * @desc The name of the stat that is shown on the window.
 * @default Counter Rate
 *
 * @param Stat 15 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.cnt * 100)
 *
 * @param Stat 15 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 16 ==
 * @default
 *
 * @param Stat 16 Name
 * @desc The name of the stat that is shown on the window.
 * @default HP Regen
 *
 * @param Stat 16 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.hrg * 100)
 *
 * @param Stat 16 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 17 ==
 * @default
 *
 * @param Stat 17 Name
 * @desc The name of the stat that is shown on the window.
 * @default MP Regen
 *
 * @param Stat 17 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mrg * 100)
 *
 * @param Stat 17 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 18 ==
 * @default
 *
 * @param Stat 18 Name
 * @desc The name of the stat that is shown on the window.
 * @default TP Regen
 *
 * @param Stat 18 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.trg * 100)
 *
 * @param Stat 18 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 19 ==
 * @default
 *
 * @param Stat 19 Name
 * @desc The name of the stat that is shown on the window.
 * @default Target Rate
 *
 * @param Stat 19 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.tgr * 100)
 *
 * @param Stat 19 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 20 ==
 * @default
 *
 * @param Stat 20 Name
 * @desc The name of the stat that is shown on the window.
 * @default Guard Effect
 *
 * @param Stat 20 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.grd * 100)
 *
 * @param Stat 20 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 21 ==
 * @default
 *
 * @param Stat 21 Name
 * @desc The name of the stat that is shown on the window.
 * @default Recover Rate
 *
 * @param Stat 21 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.rec * 100)
 *
 * @param Stat 21 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 22 ==
 * @default
 *
 * @param Stat 22 Name
 * @desc The name of the stat that is shown on the window.
 * @default Pharmacology
 *
 * @param Stat 22 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.pha * 100)
 *
 * @param Stat 22 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 23 ==
 * @default
 *
 * @param Stat 23 Name
 * @desc The name of the stat that is shown on the window.
 * @default MP Cost Rate
 *
 * @param Stat 23 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mcr * 100)
 *
 * @param Stat 23 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 24 ==
 * @default
 *
 * @param Stat 24 Name
 * @desc The name of the stat that is shown on the window.
 * @default TP Cost Rate
 *
 * @param Stat 24 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.tcr * 100)
 *
 * @param Stat 24 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 25 ==
 * @default
 *
 * @param Stat 25 Name
 * @desc The name of the stat that is shown on the window.
 * @default Damage Rate
 *
 * @param Stat 25 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.pdr * 100)
 *
 * @param Stat 25 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 26 ==
 * @default
 *
 * @param Stat 26 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Damage Rate
 *
 * @param Stat 26 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mdr * 100)
 *
 * @param Stat 26 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 27 ==
 * @default
 *
 * @param Stat 27 Name
 * @desc The name of the stat that is shown on the window.
 * @default Floor Damage Rate
 *
 * @param Stat 27 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.fdr * 100)
 *
 * @param Stat 27 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 28 ==
 * @default
 *
 * @param Stat 28 Name
 * @desc The name of the stat that is shown on the window.
 * @default EXP Rate
 *
 * @param Stat 28 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.exr * 100)
 *
 * @param Stat 28 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 29 ==
 * @default
 *
 * @param Stat 29 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 29 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 29 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 30 ==
 * @default
 *
 * @param Stat 30 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 30 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 30 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 31 ==
 * @default
 *
 * @param Stat 31 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 31 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 31 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 32 ==
 * @default
 *
 * @param Stat 32 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 32 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 32 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 33 ==
 * @default
 *
 * @param Stat 33 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 33 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 33 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 34 ==
 * @default
 *
 * @param Stat 34 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 34 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 34 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 35 ==
 * @default
 *
 * @param Stat 35 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 35 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 35 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 36 ==
 * @default
 *
 * @param Stat 36 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 36 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 36 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 37 ==
 * @default
 *
 * @param Stat 37 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 37 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 37 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 38 ==
 * @default
 *
 * @param Stat 38 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 38 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 38 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 39 ==
 * @default
 *
 * @param Stat 39 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 39 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 39 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 40 ==
 * @default
 *
 * @param Stat 40 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 40 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 40 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 41 ==
 * @default
 *
 * @param Stat 41 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 41 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 41 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 42 ==
 * @default
 *
 * @param Stat 42 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 42 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 42 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 43 ==
 * @default
 *
 * @param Stat 43 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 43 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 43 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 44 ==
 * @default
 *
 * @param Stat 44 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 44 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 44 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 45 ==
 * @default
 *
 * @param Stat 45 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 45 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 45 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 46 ==
 * @default
 *
 * @param Stat 46 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 46 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 46 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 47 ==
 * @default
 *
 * @param Stat 47 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 47 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 47 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 48 ==
 * @default
 *
 * @param Stat 48 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 48 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 48 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 49 ==
 * @default
 *
 * @param Stat 49 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 49 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 49 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 50 ==
 * @default
 *
 * @param Stat 50 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 50 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 50 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 51 ==
 * @default
 *
 * @param Stat 51 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 51 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 51 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 52 ==
 * @default
 *
 * @param Stat 52 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 52 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 52 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 53 ==
 * @default
 *
 * @param Stat 53 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 53 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 53 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 54 ==
 * @default
 *
 * @param Stat 54 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 54 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 54 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 55 ==
 * @default
 *
 * @param Stat 55 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 55 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 55 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 56 ==
 * @default
 *
 * @param Stat 56 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 56 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 56 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 57 ==
 * @default
 *
 * @param Stat 57 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 57 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 57 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 58 ==
 * @default
 *
 * @param Stat 58 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 58 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 58 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 59 ==
 * @default
 *
 * @param Stat 59 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 59 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 59 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 60 ==
 * @default
 *
 * @param Stat 60 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 60 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 60 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 61 ==
 * @default
 *
 * @param Stat 61 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 61 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 61 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 62 ==
 * @default
 *
 * @param Stat 62 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 62 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 62 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 63 ==
 * @default
 *
 * @param Stat 63 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 63 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 63 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 64 ==
 * @default
 *
 * @param Stat 64 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 64 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 64 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 65 ==
 * @default
 *
 * @param Stat 65 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 65 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 65 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 66 ==
 * @default
 *
 * @param Stat 66 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 66 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 66 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 67 ==
 * @default
 *
 * @param Stat 67 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 67 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 67 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 68 ==
 * @default
 *
 * @param Stat 68 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 68 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 68 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 69 ==
 * @default
 *
 * @param Stat 69 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 69 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 69 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 70 ==
 * @default
 *
 * @param Stat 70 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 70 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 70 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 71 ==
 * @default
 *
 * @param Stat 71 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 71 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 71 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 72 ==
 * @default
 *
 * @param Stat 72 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 72 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 72 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 73 ==
 * @default
 *
 * @param Stat 73 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 73 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 73 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 74 ==
 * @default
 *
 * @param Stat 74 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 74 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 74 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 75 ==
 * @default
 *
 * @param Stat 75 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 75 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 75 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 76 ==
 * @default
 *
 * @param Stat 76 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 76 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 76 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 77 ==
 * @default
 *
 * @param Stat 77 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 77 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 77 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 78 ==
 * @default
 *
 * @param Stat 78 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 78 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 78 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 79 ==
 * @default
 *
 * @param Stat 79 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 79 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 79 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 80 ==
 * @default
 *
 * @param Stat 80 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 80 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 80 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 81 ==
 * @default
 *
 * @param Stat 81 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 81 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 81 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 82 ==
 * @default
 *
 * @param Stat 82 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 82 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 82 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 83 ==
 * @default
 *
 * @param Stat 83 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 83 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 83 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 84 ==
 * @default
 *
 * @param Stat 84 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 84 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 84 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 85 ==
 * @default
 *
 * @param Stat 85 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 85 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 85 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 86 ==
 * @default
 *
 * @param Stat 86 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 86 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 86 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 87 ==
 * @default
 *
 * @param Stat 87 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 87 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 87 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 88 ==
 * @default
 *
 * @param Stat 88 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 88 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 88 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 89 ==
 * @default
 *
 * @param Stat 89 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 89 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 89 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 90 ==
 * @default
 *
 * @param Stat 90 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 90 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 90 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 91 ==
 * @default
 *
 * @param Stat 91 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 91 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 91 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 92 ==
 * @default
 *
 * @param Stat 92 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 92 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 92 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 93 ==
 * @default
 *
 * @param Stat 93 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 93 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 93 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 94 ==
 * @default
 *
 * @param Stat 94 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 94 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 94 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 95 ==
 * @default
 *
 * @param Stat 95 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 95 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 95 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 96 ==
 * @default
 *
 * @param Stat 96 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 96 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 96 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 97 ==
 * @default
 *
 * @param Stat 97 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 97 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 97 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 98 ==
 * @default
 *
 * @param Stat 98 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 98 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 98 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 99 ==
 * @default
 *
 * @param Stat 99 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 99 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 99 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 100 ==
 * @default
 *
 * @param Stat 100 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 100 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 100 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @help
 *
 * Equip Compare Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin allows for developers to customize all the visible stats that 
 * can be seen on the Equip Screen. Furthermore, it sets the comparison window
 * to only show the stats that are being changed.
 *
 *
 * ==============================================================================
 *  How to Set Up Stats
 * ==============================================================================
 *
 * In order to set up a stat to be available to the Comparison Window, you need
 * three things:
 *
 *  -  Name
 *  -  Formula for determining the stat
 *  -  String format it will appear as
 *
 *
 * In order to set up the name, simply use the "Stat X Name" parameters.
 *
 * In order to set up the formula for find the stat based off of an Actor
 * object, simply input it into the "Stat X Eval" parameters.
 *
 * In order to set up the format of the string, and determine what other 
 * characters will be shown, simply use the "Stat X Format" parameters.
 *
 *
 * For the most part, you should be able to figure out the system through
 * the parameters that are set up by default in the plugin.
 *
 *
 * ==============================================================================
 *  Formatting the Colors
 * ==============================================================================
 *
 * You can use notetags in the "Stat X Format" parameter to customize the colors
 * used for the comparison.
 *
 *   <Pos Color: [color]>
 *   <Neg Color: [color]>
 *
 * Input the "Pos Color" or positive color for when a stat is increased.
 * Input the "Neg Color" or negative color for when a stat is decreased.
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
 */

var SRD = SRD || {};
SRD.EquipCompareUpgrade = SRD.EquipCompareUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Equipment Comparison Upgrade"] = 1.01;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.EquipCompareUpgrade
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_EquipCompareUpgrade');

_.defaultPos = String(params['Default Pos Color']);
_.defaultNeg = String(params['Default Neg Color']);
_.windowWidth = parseInt(params['Window Width']);
_.fontSize = parseInt(params['Font Size']);
_.fontPad = parseInt(params['Line Padding']);

_.names = [];
_.evals = [];
_.tags = [];
_.forms = [];
for(let i = 1; i <= 100; i++) {
	const name = String(params['Stat ' + i + ' Name']);
	const evil = String(params['Stat ' + i + ' Eval']);
	const form = String(params['Stat ' + i + ' Format']);
	if(name.length > 0 && evil.length > 0 && form.length > 0) {
		_.names[i] = name;
		_.evals[i] = evil;
		_.tags[i] = form;
		_.forms[i] = form;
		_.forms[i] = _.forms[i].replace(/\s*<Pos\s*Color\s*:\s*[^>]*\s*>\s*/, '');
		_.forms[i] = _.forms[i].replace(/\s*<Neg\s*Color\s*:\s*[^>]*\s*>\s*/, '');
	}
}

//-----------------------------------------------------------------------------
// Window_EquipStatus
//-----------------------------------------------------------------------------

Window_EquipStatus.prototype.windowWidth = function() {
	return _.windowWidth;
};

Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
	this.changeTextColor(this.systemColor());
	this.drawText(_.names[paramId], x, y, this.width - (312 - 120));
};

Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
	this.resetTextColor();
	const actor = this._actor;
	const param = eval(_.evals[paramId]);
	const result = _.forms[paramId].replace(/val/, param);
	this.drawText(result, x, y, 48, 'right');
};

Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
	let actor = this._tempActor;
	const newValue = eval(_.evals[paramId]);
	actor = this._actor;
	const diffvalue = newValue - eval(_.evals[paramId]);
	const result = _.forms[paramId].replace(/val/, newValue);
	this.changeTextColor(this.paramchangeTextColor(diffvalue, paramId));
	this.drawText(result, x, y, 48, 'right');
};

Window_EquipStatus.prototype.drawHorzLine = function(y) {
	const lineY = y + this.lineHeight() / 2 - 1;
	this.contents.paintOpacity = 48;
	this.contents.fillRect(0, lineY, this.contentsWidth(), 2, "#FFFFFF");
	this.contents.paintOpacity = 255;
};

Window_EquipStatus.prototype.paramchangeTextColor = function(change, paramId) {
    if (change > 0) {
        return this.powerUpColor(paramId);
    } else if (change < 0) {
        return this.powerDownColor(paramId);
    } else {
        return this.normalColor();
    }
};

const _Window_EquipStatus_powerUpColor = Window_EquipStatus.prototype.powerUpColor;
Window_EquipStatus.prototype.powerUpColor = function(paramId) {
	if(_.tags[paramId] && _.tags[paramId].match(/\s*<Pos\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
		return String(RegExp.$1);
	}
    return _.defaultPos;
};

const _Window_EquipStatus_powerDownColor = Window_EquipStatus.prototype.powerDownColor;
Window_EquipStatus.prototype.powerDownColor = function(paramId) {
	if(_.tags[paramId] && _.tags[paramId].match(/\s*<Neg\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
		return String(RegExp.$1);
	}
    return _.defaultNeg;
};

Window_EquipStatus.prototype.refresh = function() {
	if(this._actor) {
		this.contents.clear();
		this.drawActorName(this._actor, this.textPadding(), 0);
		this.drawHorzLine(_.fontSize);
		if(this._tempActor) {
			const y = _.fontSize + (_.fontPad * 3);
			let place = 0;
			for(var i = 1; i < _.names.length; i++) {
				if(_.names[i]) {
					let actor = this._tempActor;
					const newValue = eval(_.evals[i]);
					actor = this._actor;
					const diffvalue = newValue - eval(_.evals[i]);
					if(diffvalue !== 0) {
						this.drawItem(0, y + (_.fontSize + _.fontPad) * (place), i);
						place++;
					}
				}
			}
		}
	}
};

Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
	this.drawParamName(x + this.textPadding(), y, paramId);
	if (this._actor) {
		this.drawCurrentParam(x + this.width - (312 - 140), y, paramId);
	}
	this.drawRightArrow(x + this.width - (312 - 188), y);
	if (this._tempActor) {
		this.drawNewParam(x + this.width - (312 - 222), y, paramId);
	}
};

Window_EquipStatus.prototype.standardFontSize = function() {
	return _.fontSize;
};

//-----------------------------------------------------------------------------
// Window_StatCompare
//-----------------------------------------------------------------------------

if(Imported.YEP_EquipCore) {

Window_StatCompare.prototype.refresh = function() {
	this.contents.clear();
	if(this._actor && this._tempActor) {
		let place = 0;
		for(var i = 1; i < _.names.length; i++) {
			if(_.names[i]) {
				let actor = this._tempActor;
				const newValue = eval(_.evals[i]);
				actor = this._actor;
				const diffvalue = newValue - eval(_.evals[i]);
				if(diffvalue !== 0) {
					this.drawItem(0, place * this.lineHeight(), i);
					place++;
				}
			}
		}
	}
};

Window_StatCompare.prototype.drawParamName = function(y, paramId) {
	const x = this.textPadding();
	this.changeTextColor(this.systemColor());
	this.drawText(_.names[paramId], x, y, this._paramNameWidth);
};

Window_StatCompare.prototype.drawCurrentParam = function(y, paramId) {
	let x = this.contents.width - this.textPadding();
	x -= this._paramValueWidth * 2 + this._arrowWidth + this._bonusValueWidth;
	Window_EquipStatus.prototype.drawCurrentParam.call(this, x, y, paramId);
};

Window_StatCompare.prototype.drawNewParam = function(y, paramId) {
	let x = this.contents.width - this.textPadding();
	x -= this._paramValueWidth + this._bonusValueWidth;
	Window_EquipStatus.prototype.drawNewParam.call(this, x, y, paramId);
};

Window_StatCompare.prototype.drawParamDifference = function(y, paramId) {
	var x = this.contents.width - this.textPadding();
	x -= this._bonusValueWidth;
	//New Code
	let actor = this._tempActor;
	const newValue = eval(_.evals[paramId]);
	actor = this._actor;
	const diffvalue = newValue - eval(_.evals[paramId]);
	//End of New Code
	if (diffvalue === 0) return;
	var actorparam = Yanfly.Util.toGroup(newValue);
	this.changeTextColor(this.paramchangeTextColor(diffvalue, paramId));
	var text = Yanfly.Util.toGroup(diffvalue);
	if (diffvalue > 0) {
		text = ' (+' + text + ')';
	} else {
		text = ' (' + text + ')';
	}
	this.drawText(text, x, y, this._bonusValueWidth, 'left');
};

Window_StatCompare.prototype.paramchangeTextColor = function(change, paramId) {
    if (change > 0) {
        return this.powerUpColor(paramId);
    } else if (change < 0) {
        return this.powerDownColor(paramId);
    } else {
        return this.normalColor();
    }
};

const _Window_StatCompare_powerUpColor = Window_StatCompare.prototype.powerUpColor;
Window_StatCompare.prototype.powerUpColor = function(paramId) {
	if(_.tags[paramId] && _.tags[paramId].match(/\s*<Pos\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
		return String(RegExp.$1);
	}
    return _.defaultPos;
};

const _Window_StatCompare_powerDownColor = Window_StatCompare.prototype.powerDownColor;
Window_StatCompare.prototype.powerDownColor = function(paramId) {
	if(_.tags[paramId] && _.tags[paramId].match(/\s*<Neg\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
		return String(RegExp.$1);
	}
    return _.defaultNeg;
};

}

})(SRD.EquipCompareUpgrade);