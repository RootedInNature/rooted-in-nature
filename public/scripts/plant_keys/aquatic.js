let aquatic = {
    group: "Group 3",
    name: "Aquatic Plants",
	key: {
		"01" : {
			"a" : {
				sentence : "Plants free-floating on or just below the water surface, not rooted (but sometimes anchored by modified branches)",
				result : "02"
			},
			"b" : {
				sentence : "Plants usually rooted, submersed or with some sections projecting above the water surface (fragments may be free-floating) or mature plants floating on the surface",
				result : "04"
			}
		},
		"02" : {
			"a" : {
				sentence : "Plants <1-8 mm long, free floating, like tiny grains, discs or spatulas, without clearly defined stems and leaves; roots 0-18; flowers tiny and rare",
				result : "Araceae"
				},
			"b" : {
				sentence : "Plants >1 cm long, mostly floating (sometimes stranded on wet substrates and appearing rooted); roots absent; flowers various",
				result : "03"
				}
		},
		"03" : {
			"a" : {
				sentence : "Plants carnivorous with bladder-like traps (→); flowers yellow, 1-few on stalks elevated above the water; calyx and corolla 2-lipped",
				result : "Lentibulariaceae"
				},
			"b" : {
				sentence : "Branches without bladder-like traps; flowers tiny, stalkless, in leaf axils, submerged; calyx and corolla absent but each flower with 8-12 sepal-like bracts",
				result : "Ceratophyllaceae"
				}
		},
		"04" : {
			"a" : {
				sentence : "Plants usually submerged; leaves grass-like, 5-15 cm long, with wide, sheathing bases with a sac of white spores on the upper/inner side; stems thick, short, inconspicuous",
				result : "Isoetaceae"
			},
			"b" : {
				sentence : "Plants submerged or floating; leaves and stems not as above; embedded spore sacs absent",
				result : "05"
			}
		},
		"05" : {
			"a" : {
				sentence : "Leaves paired (opposite) or whorled on the stems",
				result : "06"
				},
			"b" : {
				sentence : "Leaves alternate on stems (sometimes ± paired near the flowers) or all basal or plants stemless",
				result : "12"
				}
		},
		"06" : {
			"a" : {
				sentence : "Leaves deeply divided",
				result : "07"
				},
			"b" : {
				sentence : "Leaves simple",
				result : "08"
				}
		},
		"07" : {
			"a" : {
				sentence : "Leaves in rings of 4, finely pinnately divided into thread-like, smooth-edged segments; flowers in terminal spikes above the water",
				result : "Haloragaceae"
				},
			"b" : {
				sentence : "Leaves in rings of 5-12, 1-2X deeply forked ± regularly into 2 branches of ≈ size, usually finely spiny-toothed; flowers stalkless, in leaf axils, submerged",
				result : "Ceratophyllaceae"
				}
		},
		"08": {
			"a": {
				sentence: "Leaves (at least some) in rings (whorled)",
				result: "09"
				},
			"b" : {
				sentence : "Leaves paired (opposite)",
				result : "10"
				}
		},
		"09" : {
			"a" : {
				sentence : "Leaves ≥6 per node, smooth edged; stems unbranched, several arising from creeping rootstocks",
				result : "Plantaginaceae"
				},
			"b" : {
				sentence : "Leaves 2-4 per node (if >4/node, then conspicuously toothed), smooth-edged to conspicuously toothed; stems usually branched",
				result : "Hydrocharitaceae"
				}
		},
		"10" : {
			"a" : {
				sentence : "Leaves succulent, ± round, 10-35 x 7-25 mm; flowers 6-10 mm wide, short-stalked, 1-2 in leaf axils; corolla tubular, with 5 rounded, spreading white or bluish-white lobes, often yellowish inside; seAB",
				result : "Plantaginaceae"
				},
			"b" : {
				sentence : "Leaves thread-like (filiform), ≤2 mm wide; flowers 1-5 mm long, without petals and sepals",
				result : "11"
				}
		},
		"11" : {
			"a" : {
				sentence : "Leaves 35-42(80) x 0-1 mm, tipped with a sharp point; stipules thin ± translucent, sheathing the stem; plants submersed",
				result : "Potamogetonaceae"
				},
			"b" : {
				sentence : "Leaves 5-25 x 0-1 mm, notched at the tip; stipules lacking; plants submersed or sometimes with a floating rosette of spoonshaped leaves",
				result : "Plantaginaceae"
				}
		},
		"12" : {
			"a" : {
				sentence : "Leaves deep-lobed or divided into leaflets",
				result : "13"
				},
			"b" : {
				sentence : "Leaves not deeply lobed or divided (sometimes heart-shaped)",
				result : "16"
				}
		},
		"13" : {
			"a" : {
				sentence : "Plants with spreading rootstocks (rhizomes); leaves ± basal with 3-4 ≈ leaflets at the tip of a long stalk",
				result : "14"
				},
			"b" : {
				sentence : "Plants with slender, fibrous roots at the base or from leafy joints; leaves alternate along the flowering stems, variously lobed or divided but not as above; basal leaves absent",
				result : "15"
				}
		},
		"14" : {
			"a" : {
				sentence : "Leaves basal (from rootstocks), resembling a four-leaf clover; leaflets 4, fan-shaped; plants reproducing by spores in hard, bean-shaped structures (often hidden among the leaves) - Marsilea* vestita S3",
				result : "Marsileaceae"
				},
			"b" : {
				sentence : "Leaves alternate, crowded near the base of the flowering stalks; leaflets, 3, oval; plants reproducing by flowers in showy, elongating clusters (racemes), white to pinkish, with 5, conspicuously hairy petals",
				result : "Menyanthaceae"
				}
		},
		"15": {
				"a": {
				sentence: "Leaves oblong, pinnately divided into 3-9(13) egg-shaped to round leaflets, floating or raised above water; flowers few-many, in flat-topped, elongating clusters (corymbose racemes), 4-parted, white or pink. ",
				result: "Brassicaceae"  
				},
			"b" : {
				sentence : "Leaves circular to kidney-shaped in outline, deeply cut into thread-like or linear, fingerlike (palmate) divisions, submersed (often), floating or raised above the water; flowers 1-4 on long stalks from leaf axils, 5-parted, yellow or white",
				result : "Ranunculaceae"
				}
		},
		"16" : {
			"a" : {
				sentence : "Leaves all basal (rarely a few scale-like leaves along the stem), arising from rootstocks or fibrous roots",
				result : "17"
				},
			"b" : {
				sentence : "Leaves (at least some) on the stems",
				result : "21"
				}
		},
		"17" : {
			"a" : {
				sentence : "Mature leaves floating, oval to heart-shaped; submersed leaves similar to floating leaves, few or none; from thick rootstocks; flowers solitary, on long stalks",
				result : "18"
				},
			"b" : {
				sentence : "Mature leaves submerged, floating and/or raised above water, linear, narrowly heartshaped or arrowhead-shaped and notched at the base; from fibrous roots of slender rootstocks; flowers 1-many, stalkless or shortstalked in clusters",
				result : "19"
				}
			},
		"18" : {
			"a" : {
				sentence : "Leaves deeply lobed at the base, with the stalk attached at the notch; submersed parts not gummy; flowers 25-70 mm across, yellow or white; widespread in AB,but some rare spp",
				result : "Nymphaeaceae"
				},
			"b" : {
				sentence : "Leaves oval, with the stalk attached near the center of the blade; submersed parts with a thick gummy coating; flowers 12-25 mm wide, red-purple; neAB",
				result : "Cabombaceae"
				}
		},
		"19" : {
			"a" : {
				sentence : "Leaves 2-8 cm long, hollow, linear, in a basal rosette; neAB",
				result : "Campanulaceae"
				},
			"b" : {
				sentence : "Mature leaves not hollow, narrowly heartshaped or arrowhead-shaped and notched at the base submersed, floating or spreading to erect",
				result : "20"
				}
			},
		"20" : {
			"a" : {
				sentence : "Plant juice watery; flowers tiny, many, stalkless in a fleshy, 2-10 cm spike (spadix) at the base of a showy white bract (spathe); mature leaves spreading to erect (not floating or submersed), egg-shaped with rounded to notched bases",
				result : "Araceae"
				},
			"b" :{ 
				sentence: "Plant juice milky; flowers showy, with 3 white, . 1-2 cm long petals, stalked, in rings (whorls) of . 3 in branched, (5)20-50(100) cm tall clusters; . mature leaves submersed or floating to erect; . erect and floating leaves usually arrowheadshaped; submersed leaves often ribbon-like",
                result: "Alismataceae" 
			}
		},
		"21" : {
			"a" : {
				sentence : "Leaves oblong to kidney-shaped, with veins branching out from the midvein",
				result : "22"
				},
			"b" : {
				sentence : "Leaves linear (floating leaves may be wider), with veins mostly parallel to the midvein",
				result : "23"
				}
			},
		"22" : {
			"a" : {
				sentence : "Stems solid; stipules sheathing the stem, 5-50 mm long, ± translucent; basal leaves absent; leaves egg-shaped to oblong-lance-shaped, 1-3(8) x (2)5-15(23)cm, smooth-edged; flowers pink, 4-6 mm across, numerous in 1-2 dense, spike-like, 1-12(15) cm long clusters",
				result : "Polygonaceae"
				},
			"b" : {
				sentence : "Stems hollow; stipules absent; basal leaves usually present; leaves kidney- to heartshaped, 1-5 x 1-2 cm, toothed or smoothedged; flowers white to pinkish, 8-13 mm wide, 2-6 in open, flat-topped clusters (cymes)",
				result : "Ranunculaceae"
				}
			},
		"23" : {
			"a" : {
				sentence : "Submersed leaves <5mm wide, thread-like to ribbon-like",
				result : "24"
				},
			"b" : {
				sentence : "Submersed leaves mostly >5mm wide, ribbonlike to lance-shaped or oblong",
				result : "25"
				}
			},
		"24" : {
			"a" : {
				sentence : "Stipules fused to the leaf for their entire length; mature flowers/fruits on 2-25 mm stalks in umbrella-shaped clusters at the tip of (3)1030 cm long, spirally coiled stalks (5-30 coils); flowers with ♂ and ♀ parts, without tepals",
				result : "Ruppiaceae"
				},
			"b" : {
				sentence : "Stipules partly fused to the leaf, with a free, collar-like tip; mature flowers/fruits stalkless, in cylindrical spikes on straight or curved (not coiled) 5-10(15) cm stalks; flowers with either ♂ or ♀ parts, with 4 tepals",
				result : "Potamogetonaceae"
				}
			},
		"25" : {
			"a" : {
				sentence : "Flowers in conspicuous spherical heads of ♂ or ♀ flowers, the upper heads ♂ and the lower heads ♀; floating leaves mostly 20-100 cm long and ribbon-like",
				result : "Typhaceae"
				},
			"b" : {
				sentence : "Flowering clusters not as above; floating leaves various or absent",
				result : "26"
				}
			},
		"26" : {
			"a" : {
				sentence : "All leaves (in and out of water) linear/ ribbonlike; ligules present; flowers/fruits in small, stalked spikelets with 2 scale-like bracts (glumes) below 1-several tiny flowers (florets), , forming branched clusters (panicles); flowers with 2 scales (an outer lemma and usually an inner palea)",
				result : "Poaceae"
			},
			"b" : {
				sentence : "Floating leaves, if present, oblong to elliptic, mostly wider than submersed leaves; emergent leaves absent; ligules absent; flowers/fruits stalkless in cylindrical spikes; flowers with 4 tepals",
				result : "Potamogetonaceae"
			}
		}
	}
}

module.exports = aquatic;
