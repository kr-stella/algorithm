const solution = hp => {
    
    let ants = 0;
    
    // 장군개미 사용 (공격력 5)
    ants += Math.floor(hp / 5);
    hp %= 5;
    
    // 병정개미 사용 (공격력 3)
    ants += Math.floor(hp / 3);
    hp %= 3;
    
    // 남은 체력은 일개미가 처리 (공격력 1)
    ants += hp;

    return ants;
}