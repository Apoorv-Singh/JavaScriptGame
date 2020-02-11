const attackValue = 10;
let maxHealth = 100;

let currentMonsterHealth = maxHealth;
let currentPlayerHealth = maxHealth;

adjustHealthBars(maxHealth);

function attackHandler() {
    const damage = dealMonsterDamage(attackValue);
    currentMonsterHealth -= damage;
}


adjustHealthBars(maxHealth);
attackBtn.addEventListener('click', attackHandler);