var extreeData = [];

var cranial_nerves = {
    'text': 'Cranial Nerves',
    'a_attr': {'class':'no_checkbox'},
    'children': [
        'Visual Acuity',
        'Visual Fields',
        'Pupillary Reflex',
        'Eye Movements',
        'Facial Sensation',
        'Muscles of Mastication',
        'Muscles of Facial Expression',
        'Hearing',
        'Rinne\'s and Weber\'s',
        'Elevation of Palate',
        'Tongue Strength',
        'Neck Strength',
        {
            'text': 'Specials',
            'a_attr': {'class':'no_checkbox'},
            'children': [
                'Gag Reflex',
                'Corneal Reflex',
            ]
        },
    ]
};

var limbs = {
    'text': 'Limb Examination',
    'a_attr': {'class':'no_checkbox'},
    'children': [
        'Tone',
        'Inspection',
        {
            'text': 'Power',
            'a_attr': {'class':'no_checkbox'},
            'children': [
                'Shoulder Abduction',
                'Elbow Flexion',
                'Elbow Extension',
                'Wrist Flexion',
                'Wrist Extension',
                'Finger Abduction',
                'Finger Flexion',
                'Finger Extension',
                'Thumb Abduction',
                'Thumb Opposition',
                'Thumb Extension',
                'Hip Flexion',
                'Hip Extension',
                'Hip Abduction',
                'Knee Flexion',
                'Knee Extension',
                'Ankle Dorsiflexion',
                'Ankle Plantarflexion',
                'Ankle Inversion',
                'Ankle Eversion',
            ]
        },
        {
            'text': 'Reflexes',
            'a_attr': {'class':'no_checkbox'},
            'children': [
                'Biceps Jerk',
                'Triceps Jerk',
                'Supinator Jerk',
                'Knee Jerk',
                'Ankle Jerk',
                'Babinski',
            ]
        },
        'Cerebellar Function',
        {
            'text': 'Sensation',
            'a_attr': {'class':'no_checkbox'},
            'children': [
                {
                    'text': 'Specials',
                    'a_attr': {'class':'no_checkbox'},
                    'children': [
                        'Dermatomal',
                        'Neuronal',
                        'Distal to proximal',
            ]}
             ]
        },
        {
            'text': 'Special Maneuvres',
            'a_attr': {'class':'no_checkbox'},
            'children': [
                'Tinel\'s Test', 
                'Hoffman Test', 
                'Pronator Drift',
                'Clonus',
                'Wartenburg Sign',
                'Straight Leg Raise',
             ]
        },
        'Gait',
    ]
};

var special_examinations = {
    'text': 'Others',
    'a_attr': {'class':'no_checkbox'},
    'children': [
        'Fatiguability',
        'Parkinsonian Exam', 
        'MIni Mental State Exam',
        'Lying and Standing Blood Pressure', 
        'Cardiovascular Examination',
    ]
};

var extreeData = [
    cranial_nerves,
    limbs,
    special_examinations,
];