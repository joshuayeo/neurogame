var invxtreeData = [];

var bloods = {
    'text': 'Bloods',
    'a_attr': {'class':'no_checkbox'},
    'children': [
        'FBC/Renal Panel/LFT/CRP', 
        'Lipid Panel/HbA1C',
        'B12/Folate',
        'Thyroid Function Test',
        'Syphilis',
        'Anti AChR Ab',
        'Ceruloplasmin',
        'Creatine Kinase',
        'Thiamine',
        'Anti Nuclear Antibody',
    ] 
};

var imaging = {
    'text': 'Imaging',
    'a_attr': {'class':'no_checkbox'},
    'children': [
        'CT Brain',
        {
            'text': 'MRI/MRA/MRV',
            'a_attr': {'class':'no_checkbox'},
            'children': [
                'Brain', 
                'Spinal Cord', 
                ]
        },
        {
            'text': 'Ultrasound',
            'a_attr': {'class':'no_checkbox'},
            'children': [
                'Carotids', 
                'Transcranial Ultrasound',
                'Nerves',
                ]
        },
    
    ]
};

var ncs = {
    'text': 'Electrophysiology',
    'a_attr': {'class':'no_checkbox'},
    'children': [
        'Nerve Conduction Study',
        'Electromyography',
        'Repetitive Nerve Stimulation',
        'Electroencephalography',
        'Visual Evoked Potentials'
    ]
};

var others = {
    'text': 'Others',
    'a_attr': {'class': 'no_checkbox'},
    'children': [
        'Electrocardiogram',
        'Chest X-Ray',
        '24 Hour Tape',
    ]
}


var invxtreeData = [
    bloods,
    imaging,
    ncs,
    others,
]