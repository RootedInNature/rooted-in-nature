let ferns = {
    group: "Group 1",
    name: "Ferns & Fern Allies",
    key: {
        01:{
            a : { 
                sentence:'Leaves simple, stalkless, grass - like or scalelike, 1 - 2 mm wide',
                result: 02 
            },
            b : { 
                sentence:'Leaves(fronds) usually lobed or divided, with stalks(stipes), variously shaped and ≥5 mm wide',
                result: 05 
            }
        },

        02:{
            a : { 
                sentence:'Leaves onion - like, basal and slender with wide, sheathing bases, 5 - 15 cm long; stems thick, short and inconspicuous(covered by leaf bases); spore cases(sporangia) embedded in the upper / inner side of the leaf base',
                result: 'Isoetaceae' 
            },
            b : { 
                sentence:'Leaves scale - like, < 1.5 cm long; stems slender and conspicuous; spore cases in cones(cone scales sometimes resembling leaves) or in the axils of stem leaves',
                result: 03 
            }
        },

        03:{
            a : { 
                sentence:'Stems usually hollow, conspicuously jointed; leaves scale - like, in sheath - like rings(whorls) at stem joints; spore cases on the underside of flat, round, umbrella - like scales in cones at stem tips',
                result:'Equisetaceae'
            },
            b : { 
                sentence:'Stems solid, not jointed; leaves strap - like, spirally arranged or paired(opposite); spore cases in the axils of triangular to strap - like cone scales or in leaf axils',
                result:04
            }
        },

        04:{
            a: {
                sentence:'Plants 5 - 25 cm tall; leaves mostly strap - like or awl - shaped, 5 - 10 mm long(triangular to lanceshaped and 2 - 4 mm long in Diphasiastrum); cones(when present) cylindrical; spores all similar',
                result:'Lycopodiaceae'
            },
            b: {
                sentence:'Plants 1 - 5(7) cm tall; leaves lance - shaped, 1 - 4 mm long; cones usually ± 4 - sided / angled; spores of 2 types(small and large)',
                result:'Selaginellaceae'
            }
        },
        05: {
            a: { 
                sentence:'In colonies from spreading rootstocks in ponds and lake edges; leaves with 4 leaflets at the tip of a long stalk(like a four - leaved clover), often floating in water; spores in a hard, bean - like structures(sporocarps) on a short stalk(often hidden among the leaves)',
                result:'Marsileaceae' // - Marsilea vestita
            },
            b: {
                sentence: 'Plants and leaves not as above; spores in spore cases on green or modified leaves', 
                result:06
            }
        },

        06: {
            a: { 
                sentence:'Spore cases 1 - 1.5 mm wide, in grape - like clusters on specialized, fertile leaves; sterile leaves below fertile blades on same stalk',
                result:'Ophioglossaceae'
            },
            b: {
                sentence: 'Spore cases tiny(< 1 mm wide), in dot - like clusters(sori) on the lower surface or along edges of green leaves or specialized fertile leaves',
                result:07
            }
        },
        07: {
            a: { 
                sentence:'Leaves of 2 distinctly different types: green, without spore cases(sterile) and brown(when mature), with spore cases(fertile)',
                result:'08'
            },
            b: {
                sentence: 'Leaves all similar, not of 2 distinct types(except Pellaea gastonyi, with fertile leaves distinctly longer than sterile leaves)',
                result:'09'
            }
        },
        08: {
            a: { 
                sentence:'Plants ≤20 cm tall, in small clumps, on rocky sites in mountains or neAB(Canadian Shield); fertile leaves longer than sterile leaves',
                result:'Pteridaceae'
            },
            b: {
                sentence: 'Plants 50 - 150 cm tall, forming colonies from coarse rhizomes, on moist sites in boreal forest; fertile leaves shorter than sterile leaves', 
                result:'Onocleaceae'
            }
        }

        // 09: {a: { sentence:'Spore clusters on the leaf edges, usually under down - rolled margins, elongated. . . .10'},
        //     b: sentence: 'Spore clusters set in from leaf edges(if near the edge, then round) . . . . . . . . . . . . . . . ..12'},
        // 10: {a: { sentence:'Spore clusters under down - rolled leaf edges, kidney shaped, separate(not in a continuous strip); leaf segments fan - shaped. . . . . . . . . . . . . . . . . . . . . . . . . . . .Pteridaceae(in part). . . . . . . . . . . . . . . . . . . . . .Adiantum'},
        //     b: sentence: 'Spore clusters in a continuous strip along the leaf edge; leaf segments not fan - shaped. . 11'},

        // 11: {a: { sentence:'Plants 30 - 300 cm tall; leaves 2X pinnately divided, ± triangular, 20 - 60 cm wide. . . . . . . . . . . . . . . . . . . . . . . . . . . .Dennstaedtiaceae. . . . . . . . . . . .- Pteridium aquilinum'},
        //     b: sentence: 'Plants mostly < 30 cm tall; leaves 1 - 2X pinnately divided, < 10 cm wide. . . . . . . . . . . . . . . . . . . . . . . . .Pteridaceae(in part). . . . . . . . . . . . . . . . . . . - Myriopteris; Pellaea'},


        // 12: {a: { sentence:'Leaves 1X pinnately divided, lobed or smoothedged. . . . . . . . . . . . . . . . . . . . . . . . . . . . .13'},
        //     b: sentence: 'Leaves 2 - 4X pinnately divided. . . . . . . . . .15'},
        // 13: {a: { sentence:'Leaflets(pinnae) lobed, egg - shaped, 3 - 7 x 2 - 5 mm; leaves 5 - 10(15) cm long.Aspleniaceae. . . . . . . . . . . . . . - Asplenium viride. . . . . [Asplenium trichomanes - ramosum]'},
        //     b: sentence: 'Leaflets smooth - edged or toothed, narrowly oblong to lance - shaped, > 10 mm long; leaves(5)10 - 40 cm long. . . . . . . . . . . . . . . . . . . . .14'},

        // 14: {a: { sentence:'Leaflets rounded at the tip, smooth - edged(without spines). . . . .Polypodiaceae(p.xx)'},
        //     b: sentence: 'Leaflets pointed at the tip, edged with spines. . . . . . . . . . . . . . .Dryopteridaceae(in part). . . . . . . . . . . . . . . . . . .Polystichum '},

        // 15: {a: { sentence:'Leaf stalks(1)1.5 - 2(3) times as long as the blades; leaves divided into 3 ± equal parts, with each of the 2 lowest leaflets ≈ the remaining upper part of the leaf. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Cystopteridaceae. . . . . . . . . . . . . . . .[Dryopteridaceae, in part]'},
        //     b: sentence: 'Leaf stalks usually much < 2 times the length of the blade; lowest pair of leaflets gradually reduced upwards(not much larger than those above). . . . . . . . . . . . . . . . . . . . . . . . . . . . .16'},

        // 16: {a: { sentence:'Small tufted plants, mostly < 20 cm tall; shortcreeping scaly rhizomes bear small tufts to dense tussocks of leaves; lower leaflets somewhat remote. . . . . . . . . . . . . . . . . . . .17'},
        //     b: sentence: 'Larger plants, generally > 20 cm tall; plants tufted or in small scattered tufts or single leaves; lower leaflets not remote. . . . . . . .18'},

        // 17: {a: { sentence:'Leaf stalk bases persist after blades are shed; indusia disc - or star - shaped(→), attached under and obscured by spore clusters. . . . . .17b. . . . . . . . . . . . . . . . . . .Woodsiaceae. . . . . . . . . . . . . . . . . [Dryopteridaceae, in part]'},
        //     b: sentence: 'Leaf stalk bases disintegrate when blades are shed; indusium hood - like(→), attached at the side and curved over the spore clusters. . . . . .Cystopteridaceae[Dryopteridaceae, in part]. . . . . . . . . . . . . . . . . . .Cystopteris'},

        // 18: {a: { sentence:'Lowest pair of leaflets pointing downwards; lower leaf surface with conspicuous, nearly transparent hairs on the veins and midrib. . . . . . . . . . . . . . . . . . . . . . . . .Thelypteridaceae. . . . . . . . - Phegopteris connectilis(p.xx)'},
        //     b: sentence: 'Leaves not as above. . . . . . . . . . . . . . . . . .19'},
        // 19: {a: { sentence:'Indusia often absent, when present elongated, flap - like(attached along 1 edge) and fringed or toothed. . . . . . . . . . . . . . . . . . .Athyriaceae. . . . . . . . . . . . . . . . . . . . . - Athyrium'},
        //     b: sentence: 'Indusia present(sometimes small and soon shrivelling) round or kidney - shaped, attached in the hollow of the inner side, not fringed. . . . . . . . . . . . . . . . . . .Dryopteridaceae(in part). . . . . . . . . . . . . . . . . . . . . . . . .Dryopteris'}
    }
}

module.exports = ferns;