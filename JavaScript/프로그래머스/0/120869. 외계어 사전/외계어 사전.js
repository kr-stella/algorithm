const solution = (spell, dic) => {
    
    spell = spell.sort((a, b) => a > b? 1:-1).join(``);
    for(const str of dic) {
        if(spell === [...str].sort((a, b) => a > b? 1:-1).join(``))
            return 1;
    };
    
    return 2;
    
};