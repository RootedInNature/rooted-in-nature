let woody ={
    group: "Group 2",
    name: "Woody Plants",
    key:{
        "01" : {
            "a" : {
                sentence : "Fruit a woody or fleshy cone, formed of seedbearing scales, or an exposed seed in a fleshy cup; leaves evergreen needles or scales [GYMNOSPERMS]",
                result : "02"
                },
            "b" : {
                sentence : "Fruit various, not a cone or fleshy cup; leaves mostly deciduous with blades linear to broad, occasionally needle-like and evergreen [ANGIOSPERMS]",
                result : "05"
                }
            },
        "02" : {
            "a" : {
                sentence : "Leaves scale-like Cupressaceae",
                result : "Juniperus"
                },
            "b" : {
                sentence : "Leaves needle-like 03",
                result : "03"
                }
            },
        "03" : {
            "a" : {
                sentence : "Leaves paired (opposite) or in rings around the stem (whorls); mature ♀ cones berry-like, fleshy, waxy and bluish",
                result : "Cupressaceae"
                },
            "b" : {
                sentence : "Leaves single (alternate) or in clusters; ♀ cones not as above",
                result : "04"
                }
            },
        "04" : {
            "a" : {
                sentence : "Plants with either ♂ or ♀ structures (but not both); seeds single, dark blue, embedded in a juicy, bright red, berry-like structure (→ aril); needles single, flat, 1-2 cm long, yellowish green, with a small sharp point; inner bark reddish to purplish; shrubs or small trees in Waterton Lakes N",
                result : "Taxaceae"
                },
            "b" : {
                sentence : "Plants with both ♂ and ♀ cones; seeds numerous, in the axils of woody, spirally arranged scales in ♀ cones; needles and bark various, but not as above; trees, often widespread",
                result : "Pinaceae"
                    }
            },
        "05" : {
            "a" : {
                sentence : "Woody vines, trailing on the ground or climbing on adjacent supports (often other plants)",
                result : "06"
                },
            "b" : {
                sentence : "Trees or shrubs, erect to sprawling on the ground, but not trailing or climbing vines",
                result : "09"
                }
            },
        "06" : {
            "a" : {
                sentence : "Leaves lobed or divided into leaflets; flowers with 4, coloured, petal-like sepals and no petals; fruits with a persistent, feathery style",
                result : "Ranunculaceae"
                },
            "b" : {
                sentence : "Leaves simple (lower ones sometimes 3-lobed); flowers not as above; fruits without a persistent, feathery style",
                result : "07"
                }
            },
        "07" : {
            "a" : {
                sentence : "Leaves and branches opposite Caprifoliaceae",
                result : "Caprifoliaceae"
                },
            "b" : {
                sentence : "Leaves and branches alternate",
                result : "08"
                }
            },
        "08":{
            "a" : {
                sentence: "Plants >10 cm tall, with slender, climbing stems (10)50-300(600) cm long; leaves thin and deciduous, 3-7 cm long, elliptic to broadly heart-shaped, sometimes with basal lobes",
                result: "Solanaceae"}, 
            "b" : {
                sentence : "Plants <5 cm tall, with thread-like, trailing stems 10-50 cm long; leaves thick, evergreen, 0-1 cm long, egg-shaped to broadly elliptic",
                result : "Ericaceae"
                    }
            
            },
        "09" : {
            "a" : {
                sentence : "Leaves (some or all) scale-like, 2-4 mm",
                result : "10"
                },
            "b" : {
                sentence : "Leaves not scale-like 11",
                result : "11"
                }
            },
        "10" : {
            "a" : {
                sentence : "Leaves and branches paired (opposite); plants hairless or with scattered, short hairs",
                result : "Ericaceae"
                },
            "b" : {
                sentence : "Leaves and branches alternate; plants with dense, matted grey hairs and sparse, long, soft hairs throughout",
                result : "Cistaceae"
                    }
            },
        "11" : {
            "a" : {
                sentence : "Leaves evergreen, thick, usually covered by a well-developed protective film (cuticle); shrubs",
                result : "12"
                },
            "b" : {
                sentence : "Leaves deciduous, thin and flat (except for a few succulents), rarely with a thick cuticle; trees or shrubs",
                result : "17"
                }
            },
        "12" : {
            "a" : {
                sentence : "Leaf edges (some or all) rolled down/under",
                result : "13"
                },
            "b" : {
                sentence : "Leaf edges relatively flat, not down-rolled",
                result : "14"
                }
            },
        "13" : {
            "a" : {
                sentence : "Stipules absent; leaves alternate, paired (opposite) or ± in rings (whorls), hairless to rusty- or yellow-hairy beneath, ± smoothedged",
                result : "Ericaceae"
                },
            "b" : {
                sentence : "Stipules well-developed (→), linear to lanceshaped; leaves alternate, white-hairy beneath, usually edged with rounded teeth (at least near the base), sometimes ± smooth-edged",
                result : "Rosaceae"
                    }
            },
        "14" : {
            "a" : {
                sentence : "Leaves and branches ± paired (opposite)",
                result : "Celastraceae"
                },
            "b" : {
                sentence : "Leaves and branches alternate",
                result : "15"
                }
            },
        "15" : {
            "a" : {
                sentence : "Leaves distinctly sharp-toothed",
                result : "Berberidaceae"
                },
            "b" : {
                sentence : "Leaves smooth-edged to obscurely toothed or wavy-edged",
                result : "16"
                }
            },
        "16" :{ 
            "a" : {
                sentence : "Leaves with 3 strong veins from the base and weak side veins, shiny, often sticky and sweetscented",
                result : "Rhamnaceae"
                },
            "b" : {
                sentence : "Leaves usually with a prominent mid-veinbearing several side-veins along its length,sometimes shiny, but neither sticky noraromatic",
                result : "Ericaceae"
                }
            }
        },
        "17" : {
            "a" : {
                sentence : "Plants 10-30 cm tall, with short, woodybranches at the base; leaves in rings (whorls)",
                result : "Polygonaceae"
                },
            "b" : {
                sentence : "Plants various; leaves alternate or paired",
                result : "18"
                }
            },
        "18" : {
            "a" : {
                sentence : "Leaves and branches all/mostly paired",
                result : "19"
                },
            "b" : {
                sentence : "Leaves and branches alternate",
                result : "30"
                }
            },
        "19" : {
            "a" : {
                sentence : "Leaves divided into leaflets",
                result : "20"
                },
            "b" : {
                sentence : "Leaves simple",
                result : "22"
                }
            },
        "20" : {
            "a" : {
                sentence : "Twigs yellowish green, brown with age, with athick pith; flower/fruit clusters at branch tips;flowers creamy white, with ♂ + ♀ parts; fruitsmany-seeded, berry-like drupes, red or black(rarely yellow or white); leaves sharp-toothed",
                result : "Adoxaceae"
                },
            "b" : {
                sentence : "Twigs grey or greenish, grey with age, with athin pith; flower/fruit clusters along branchesand at tips; flowers greenish, ♂ or ♀, withsexes on separate plants; fruits dry, wingedsamaras; leaf edges smooth or toothed, lobedor unlobed",
                result : "21"
                }
            },
        "21" : {
            "a" : {
                sentence : "Fruits single; leaflets 5-9(11), smooth-edgedor regularly toothed; twigs grey, hairy; budsbrown or black, hairy",
                result : "Oleaceae"
                },
            "b" : {
                sentence : "Fruits double (in pairs); leaflets 3-5(7),shallowly lobed; twigs and buds pale greenand hairless Sapindaceae",
                result : "Sapindaceae"
                    }
            },
        "22" : {
            "a" : {
                sentence : "Leaf edges with small teeth",
                result : "23"
                },
            "b" : {
                sentence : "Leaf edges smooth or wavy",
                result : "25"
                }
            },
        "23" : {
            "a" : {
                sentence : "Stems mat-forming, sprawling with ascendingtips; leaves concentrated at branch tips;flowers purple to lavender, pink or white,2-lipped",
                result : "Plantaginaceae"
                },
            "b" : {
                sentence : "Stems erect to ascending; leavesnot concentrated at branch tips; flowers whiteor green, regular (not 2-lipped)",
                result : "24"
                }
            },
        "24" : {
            "a" : {
                sentence : "Twigs spine-tipped; leaf stalks 10-27 mm long;flowers greenish, inconspicuous, <0 cmwide, not fragrant",
                result : "Rhamnaceae"
                },
            "b" : {
                sentence : "Twigs without spines; leaf stalks (0)1-6 mmlong; flowers white, 2-4 cm wide, fragrant",
                result : "Hydrangeaceae"
                    }
            },

            "b" : {
                sentence : "Leaves unlobed, smooth-edged (sometimes wavy-toothed), with pinnate veins",
                result : "27"
                }
            ,
        "26" : {
            "a" : {
                sentence : "Flowers white, in erect, flat-topped clusters at branch tips; fruits juicy red berries",
                result : "Adoxaceae"
                },
            "b" : {
                sentence : "Flowers yellowish green, in drooping clusters in the leaf axils and at branch tips; fruits dry, winged samaras, in fused pairs",
                result : "Sapindaceae"
                }
            },
        "27" : {
            "a" : {
                sentence : "Shrubs 1-3(4) m tall; lower branches often sprawling and rooting at the joints; twigs deep red to purplish or greenish; flowers/fruits numerous, in branched, flat-topped clusters (cymes); petals 4, white, 2-3(4) mm long; fruits white to bluish (drying greenish), fleshy drupes",
                result : "Cornaceae"
                },
            "b" : {
                sentence : "Small trees or shrubs 1-6 m tall; lower branches not usually rooting at joints; twigs various, not red; flowers/fruits few to many, often in pairs, not in cymes; petals various; fruits various (if white to greenish drupes, then few and not in cymes)",
                result : "28"
                }
            },
        "28" : {
            "a" : {
                sentence : "Flowers 2-4 mm wide, either ♂ or ♀, with different sexes on separate plants; leaves with small, brown or silvery scales (at least beneath) and tiny, star-shaped hairs; branches sometimes spiny",
                result : "Elaeagnaceae"
                },
            "b" : {
                sentence : "Flowers >4 mm wide, with ♂ + ♀ parts; leaves with or without simple hairs, but without brown or silvery scales; branches never spiny",
                result : "29"
                }
            },
        "29" : {
            "a" : {
                sentence : "Shrubs, ±1 m (rarely >3 m) tall; flowers few to several, in pairs or short clusters; leaf stalks 0-1 cm long",
                result : "Caprifoliaceae"
                },
            "b" : {
                sentence : "Tall shrubs to small trees, 2-6 m tall; flowers many, in elongated, densely branched clusters; leaf stalks 1-4 cm long",
                result : "Oleaceae"
                    }
            },
        "30" : {
            "a" : {
                sentence : "Leaves divided into leaflets (compound)",
                result : "31"
                },
            "b" : {
                sentence : "Leaves undivided (simple)",
                result : "35"
                }
            },
        "31" : {
            "a" : {
                sentence : "Leaflets smooth edged, all paired (no tip leaflet); stipules usually becoming spines; flowers bilaterally symmetrical, pea-like, yellow; fruits 4-6 cm pods",
                result : "Fabaceae"
                },
            "b" : {
                sentence : "Leaflets toothed or smooth edged, paired plus 1 at the tip; stipules (if present) not spiny; flowers radially symmetric or tiny in round, 3-4 mm heads; fruits various, not as above",
                result : "32"
                }
            },

        //     "b" : {
        //         sentence : "Stems not bristly or prickly",
        //         result : "33"
        //         }
        //     },
        // "33" : {
        //     "a" : {
        //         sentence : "Leaves divided into 3 leaflets (rarely just 3-lobed)",
        //         result : "Anacardiaceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves pinnately divided into >3 leaflets",
        //         result : "34"
        //         }
        //     },
        // "34" : {
        //     "a" : {
        //         sentence : "Leaves 2-3X divided, with many slender lobes giving them a delicate, fern-like appearance; sub-shrubs (± woody) or perennial herbs; flowers tubular, yellowish, tiny (<1 mm wide), in round, 3-4 mm heads within a many-branched cluster (in part)",
        //         result : ""
        //         },
        //     "b" : {
        //         sentence : "Leaves 1X divided into 5-20(25) elliptic to eggshaped leaflets, not fern-like; trees or shrubs; flowers white or yellow, 5-25 mm wide, with 5 spreading, egg-shaped to round petals, single or in showy, branched clusters (cymes, panicles)",
        //         result : "Rosaceae"
        //             }
        //     },
        // "35" : {
        //     "a" : {
        //         sentence : "Leaves mostly wedge-shaped at the base and 3-lobed at the tip, (4)5-35 × 1-7 mm, densely hairy",
        //         result : "Asteraceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves not as above",
        //         result : "36"
        //         }
        //     },
        // "36" : {
        //     "a" : {
        //         sentence : "Some or all flowers borne in catkins or dense, catkin-like spikes",
        //         result : "37"
        //         },
        //     "b" : {
        //         sentence : "Catkins or catkin-like spikes absent",
        //         result : "40"
        //         }
        //     },
        // "37" : {
        //     "a" : {
        //         sentence : "Leaves, thick, succulent, ± cylindrical or scalelike",
        //         result : "38"
        //         },
        //     "b" : {
        //         sentence : "Leaves thin, flat, with well-defined blades and stalks",
        //         result : "39"
        //         }
        //     },
        // "38" : {
        //     "a" : {
        //         sentence : "Stems with thorns; leaves linear, ± cylindrical, 1-4 cm long",
        //         result : "Amaranthaceae"
        //         },
        //     "b" : {
        //         sentence : "Stems without thorns; leaves scale-like, broadly lance-shaped, 1-2 mm long; not yet wild in AB, but expected to spread from nearby US infestations",
        //         result : "Tamaricaceae"
        //             }
        //     },
        // "39" : {
        //     "a" : {
        //         sentence : "♂ and ♀ catkins on the same plant; fruits nutlets, 1-seeded, winged or wingless",
        //         result : "Betulaceae"
        //         },
        //     "b" : {
        //         sentence : "♂ and ♀ catkins on separate plants; fruits capsules, with numerous seeds each tipped with a tuft of hair",
        //         result : "Salicaceae"
        //             }
        //     },
        // "40" : {
        //     "a" : {
        //         sentence : "Leaf edges smooth (sometimes shallowly wavy-toothed)",
        //         result : "41"
        //         },
        //     "b" : {
        //         sentence : "Leaf edges distinctly toothed or lobed",
        //         result : "49"
        //         }
        //     },

        //     "b" : {
        //         sentence : "Leaves, twigs and buds not scurfy",
        //         result : "43"
        //         }
        //     },
        // "42" : {
        //     "a" : {
        //         sentence : "Erect shrubs or small trees 2-7 m tall; leaves all alternate, dotted with silvery or brown scales; twigs and buds covered with tiny silvery or brown scales, young growth sometimes with star-shaped hairs",
        //         result : "Elaeagnaceae"
        //         },
        //     "b" : {
        //         sentence : "Prostrate to ascending (rarely erect) shrubs or sub-shrubs 0-2 m tall, often ± as wide as tall; upper leaves alternate, lower leaves often ± paired (opposite), usually grey, often with fine scales",
        //         result : "Amaranthaceae"
        //             }
        //     },
        // "43" : {
        //     "a" : {
        //         sentence : "Leaves smooth-edged (rarely with 1-2 lobes), ± hairless, minutely hairy, woolly or with dots or pits, tipped with a sharp point; stems sometimes woody at the base only, often twisted and gnarled; flowers tiny, in compact, flower-like heads",
        //         result : "Asteraceae"
        //         },
        //     "b" : {
        //         sentence : "Plants not as above",
        //         result : "44"
        //         }
        //     },
        // "44" : {
        //     "a" : {
        //         sentence : "Plants densely hairy with matted white to brownish hairs plus star-shaped hairs with 1 long ray; leaf edges strongly rolled down/",
        //         result : ""
        //         },
        //     "b" : {
        //         sentence : "Plants not as above",
        //         result : "45"
        //         }
        //     },
        // "45" : {
        //     "a" : {
        //         sentence : "Branches often spiny at nodes; twigs creamy/ white; flowers in clusters of 1-4 in leaf axils; shrubs/trees 1-6 m tall",
        //         result : "Solanaceae"
        //         },
        //     "b" : {
        //         sentence : "Branches not spiny; twigs gray, green to brown or maroon; flowers various; shrubs",
        //         result : "46"
        //         }
        //     },
        // "46" : {
        //     "a" : {
        //         sentence : "Leaves 1-2 mm wide, linear to narrowly lanceshaped, ± cylindric to flattened, hairless, with a pale, waxy coating (glaucous)",
        //         result : "Amaranthaceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves >2 mm wide (mostly much wider), narrow egg-shaped to elliptic or nearly circular, flattened, hairy or not, glaucous or not",
        //         result : "47"
        //         }
        //     },
        // "47" : {
        //     "a" : {
        //         sentence : "Twigs and undersides of leaves hairless or with white hairs; flowers urn-shaped, tipped with 5 small petal lobes",
        //         result : "Ericaceae"
        //         },
        //     "b" : {
        //         sentence : "Twigs and leaf undersides with brown to yellowish hairs; flowers cupped, with 5 broad petals",
        //         result : "48"
        //         }
        //     },

        //     "b" : {
        //         sentence : "Leaves egg-shaped, 1-4 cm long; flowers pinkish, 6-8 mm across, 2-6(15) on the tips of short, leafy side-branches; fruits black, shiny, berry-like pomes",
        //         result : "Rosaceae"
        //             }
        //     },
        // "49" : {
        //     "a" : {
        //         sentence : "Leaves with finger-like (palmate) veins and lobes",
        //         result : "50"
        //         },
        //     "b" : {
        //         sentence : "Leaves with pinnate veins, unlobed or pinnately lobed",
        //         result : "53"
        //         }
        //     },
        // "50" : {
        //     "a" : {
        //         sentence : "Stems prickly",
        //         result : "51"
        //         },
        //     "b" : {
        //         sentence : "Stems not prickly",
        //         result : "52"
        //         }
        //     },
        // "51" : {
        //     "a" : {
        //         sentence : "Leaves prickly, >15 cm wide",
        //         result : "Araliaceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves not prickly, <15 cm wide",
        //         result : "Grossulariaceae"
        //             }
        //     },
        // "52" : {
        //     "a" : {
        //         sentence : "Leaves with well-developed stipules >5 mm long; flower/fruit clusters at branch tips; fruits 2(3) dry capsules (follicles) 2 mm long or tiny red druplets in coherent, (10)15-20 mm wide clusters (raspberries)",
        //         result : "Rosaceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves without stipules (at most a few bristles); flower/fruit clusters in leaf axils; fruits red or black berries, 5-10(15) mm wide",
        //         result : "Grossulariaceae"
        //             }
        //     },
        // "53" : {
        //     "a" : {
        //         sentence : "Stems armed with spines or thorns (sometimes few and scattered)",
        //         result : "54"
        //         },
        //     "b" : {
        //         sentence : "Stems not thorny (sometimes with short, projecting branchlets [spurs] that are not spiny-tipped)",
        //         result : "55"
        //         }
        //     },
        // "54" : {
        //     "a" : {
        //         sentence : "Thorns 15-60 mm long, simple or occasionally branched; leaf blades 2-7 cm long, coarsely toothed, but not spiny",
        //         result : "Rosaceae"
        //         },
        //     "b" : {
        //         sentence : "Spines simple or 3-pronged from the base, 9-17 mm long; leaves 1-5 cm long, edged with spine-tipped teeth",
        //         result : "Berberidaceae"
        //             }
        //     },
        // "55" : {
        //     "a" : {
        //         sentence : "Sprawling, mat-forming shrubs 3-20(30) cm tall",
        //         result : "Ericaceae"
        //         },
        //     "b" : {
        //         sentence : "Erect or ascending shrubs or trees, >30 cm tall",
        //         result : "56"
        //         }
        //     },
        // "56" : {
        //     "a" : {
        //         sentence : "Leaves prominently lobed, widest above midleaf, often fiddle-shaped",
        //         result : "Fagaceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves not as above",
        //         result : "57"
        //         }
        //     },

        //     "b" : {
        //         sentence : "Leaf stalks without glands at the top; buds mostly not clustered at tips; fruits various",
        //         result : "58"
        //         }
        //     },
        // "58" : {
        //     "a" : {
        //         sentence : "Leaves lance-shaped, with 1-4 pairs of teeth on the broad upper third, tapered to the base, dotted with tiny yellow glands; shrubs aromatic, growing on shores and in wetlands",
        //         result : "Myricaceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves egg-shaped, with teeth along the full length or conspicuous teeth near the tip, without glands; shrubs/trees not notably aromatic, growing in various habitats",
        //         result : "59"
        //         }
        //     },
        // "59" : {
        //     "a" : {
        //         sentence : "Branches with short, stout side-shoots that bear leaves and end in flower/fruit clusters Rosaceae",
        //         result : "Rosaceae"
        //         },
        //     "b" : {
        //         sentence : "Branches without stout side shoots; flower clusters at twig tips or in leaf/branch axils",
        //         result : "60"
        //         }
        //     },
        // "60" : {
        //     "a" : {
        //         sentence : "Trees 15-35 m tall, usually with a single trunk; leaves with sharp, forward-pointing teeth and many straight side-veins; fruits flat, circular, winged samaras",
        //         result : "Ulmaceae"
        //         },
        //     "b" : {
        //         sentence : "Shrubs 0-6 m tall, usually with several main stems; leaves and fruits not as above",
        //         result : "61"
        //         }
        //     },
        // "61" : {
        //     "a" : {
        //         sentence : "Stipules present (at least in early growth), attached to the twig and leaving a scar after falling; leaves with main side veins prominent, curved to run ± parallel to the leaf edge, and not ending in a tooth",
        //         result : "Rhamnaceae"
        //         },
        //     "b" : {
        //         sentence : "Stipules absent or attached to the leaf stalk, so not leaving a scar on the twig; leaves with main side veins prominent or not, not curved to run ± parallel to the leaf edge, and usually ending in a tooth",
        //         result : "62"
        //         }
        //     },
        // "62" : {
        //     "a" : {
        //         sentence : "Leaves with a few, coarse teeth, mainly near the tip; flowers saucer-shaped, 3-many, in branched clusters at branch tips",
        //         result : "Rosaceae"
        //         },
        //     "b" : {
        //         sentence : "Leaves with many, fine teeth along the entire length; flowers urn-shaped, 1-few at branch tips and/or in leaf/stem axils",
        //         result : "Ericaceae"
        //             }
            // },
        // }
    }

    module.exports = woody;