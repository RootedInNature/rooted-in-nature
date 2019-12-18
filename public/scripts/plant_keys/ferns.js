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
        }
        // 05a: {'In colonies from spreading rootstocks in ponds and lake edges; leaves with 4 leaflets at the tip of a long stalk(like a four - leaved clover), often floating in water; spores in a hard, bean - like structures(sporocarps) on a short stalk(often hidden among the leaves). . . . . . . . . . . . . . . . . . . . . . . .Marsileaceae - Marsilea vestita'},
        // 05b: {'Plants and leaves not as above; spores in spore cases on green or modified leaves. .06'},

        // 06a: {'Spore cases 1 - 1.5 mm wide, in grape - like clusters on specialized, fertile leaves; sterile leaves below fertile blades on same stalk. . . . . . . . . . . . . . . . . .Ophioglossaceae'},
        // 06b: {'Spore cases tiny(< 1 mm wide), in dot - like clusters(sori) on the lower surface or along edges of green leaves or specialized fertile leaves. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Ferns - Polypodiaceae of Moss(1983). . 07'},
        // '07a': {'Leaves of 2 distinctly different types: green, without spore cases(sterile) and brown(when mature), with spore cases(fertile). . . . . . .08'},
        // '07b': {'Leaves all similar, not of 2 distinct types(except Pellaea gastonyi, with fertile leaves distinctly longer than sterile leaves) . . . . ..09'},
        // '08a': {'Plants ≤20 cm tall, in small clumps, on rocky sites in mountains or neAB(Canadian Shield); fertile leaves longer than sterile leaves. . . . . . . . . . . . . . . . . . . . . . . . . .Pteridaceae(in part). . . . . . . . . . . . . . . . . . . . . - Cryptogramma'},
        // '08b': {'Plants 50 - 150 cm tall, forming colonies from coarse rhizomes, on moist sites in boreal forest; fertile leaves shorter than sterile leaves. .Onocleaceae[Dryopteridaceae, in part]. . . . . . . . .Matteuccia struthiopteris'},

        // '09a': {'Spore clusters on the leaf edges, usually under down - rolled margins, elongated. . . .10'},
        // '09b': {'Spore clusters set in from leaf edges(if near the edge, then round) . . . . . . . . . . . . . . . ..12'},
        // '10a': {'Spore clusters under down - rolled leaf edges, kidney shaped, separate(not in a continuous strip); leaf segments fan - shaped. . . . . . . . . . . . . . . . . . . . . . . . . . . .Pteridaceae(in part). . . . . . . . . . . . . . . . . . . . . .Adiantum'},
        // '10b': {'Spore clusters in a continuous strip along the leaf edge; leaf segments not fan - shaped. . 11'},

        // '11a': {'Plants 30 - 300 cm tall; leaves 2X pinnately divided, ± triangular, 20 - 60 cm wide. . . . . . . . . . . . . . . . . . . . . . . . . . . .Dennstaedtiaceae. . . . . . . . . . . .- Pteridium aquilinum'},
        // '11b': {'Plants mostly < 30 cm tall; leaves 1 - 2X pinnately divided, < 10 cm wide. . . . . . . . . . . . . . . . . . . . . . . . .Pteridaceae(in part). . . . . . . . . . . . . . . . . . . - Myriopteris; Pellaea'},


        // '12a': {'Leaves 1X pinnately divided, lobed or smoothedged. . . . . . . . . . . . . . . . . . . . . . . . . . . . .13'},
        // '12b': {'Leaves 2 - 4X pinnately divided. . . . . . . . . .15'},
        // '13a': {'Leaflets(pinnae) lobed, egg - shaped, 3 - 7 x 2 - 5 mm; leaves 5 - 10(15) cm long.Aspleniaceae. . . . . . . . . . . . . . - Asplenium viride. . . . . [Asplenium trichomanes - ramosum]'},
        // '13b': {'Leaflets smooth - edged or toothed, narrowly oblong to lance - shaped, > 10 mm long; leaves(5)10 - 40 cm long. . . . . . . . . . . . . . . . . . . . .14'},

        // '14a': {'Leaflets rounded at the tip, smooth - edged(without spines). . . . .Polypodiaceae(p.xx)'},
        // '14b': {'Leaflets pointed at the tip, edged with spines. . . . . . . . . . . . . . .Dryopteridaceae(in part). . . . . . . . . . . . . . . . . . .Polystichum '},

        // '15a': {'Leaf stalks(1)1.5 - 2(3) times as long as the blades; leaves divided into 3 ± equal parts, with each of the 2 lowest leaflets ≈ the remaining upper part of the leaf. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Cystopteridaceae. . . . . . . . . . . . . . . .[Dryopteridaceae, in part]'},
        // '15b': {'Leaf stalks usually much < 2 times the length of the blade; lowest pair of leaflets gradually reduced upwards(not much larger than those above). . . . . . . . . . . . . . . . . . . . . . . . . . . . .16'},

        // '16a': {'Small tufted plants, mostly < 20 cm tall; shortcreeping scaly rhizomes bear small tufts to dense tussocks of leaves; lower leaflets somewhat remote. . . . . . . . . . . . . . . . . . . .17'},
        // '16b': {'Larger plants, generally > 20 cm tall; plants tufted or in small scattered tufts or single leaves; lower leaflets not remote. . . . . . . .18'},

        // '17a': {'Leaf stalk bases persist after blades are shed; indusia disc - or star - shaped(→), attached under and obscured by spore clusters. . . . . .17b. . . . . . . . . . . . . . . . . . .Woodsiaceae. . . . . . . . . . . . . . . . . [Dryopteridaceae, in part]'},
        // '17b': {'Leaf stalk bases disintegrate when blades are shed; indusium hood - like(→), attached at the side and curved over the spore clusters. . . . . .Cystopteridaceae[Dryopteridaceae, in part]. . . . . . . . . . . . . . . . . . .Cystopteris'},

        // '18a': {'Lowest pair of leaflets pointing downwards; lower leaf surface with conspicuous, nearly transparent hairs on the veins and midrib. . . . . . . . . . . . . . . . . . . . . . . . .Thelypteridaceae. . . . . . . . - Phegopteris connectilis(p.xx)'},
        // '18b': {'Leaves not as above. . . . . . . . . . . . . . . . . .19'},
        // '19a': {'Indusia often absent, when present elongated, flap - like(attached along 1 edge) and fringed or toothed. . . . . . . . . . . . . . . . . . .Athyriaceae. . . . . . . . . . . . . . . . . . . . . - Athyrium'},
        // '19b': {'Indusia present(sometimes small and soon shrivelling) round or kidney - shaped, attached in the hollow of the inner side, not fringed. . . . . . . . . . . . . . . . . . .Dryopteridaceae(in part). . . . . . . . . . . . . . . . . . . . . . . . .Dryopteris'}
    }
}

module.exports = ferns;