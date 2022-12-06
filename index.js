class Client {
    constructor(person) {
        this.person = person;
    }

    happyClient() {
        let [ happinessAhead, happinessAfter ] = [ 0, 0 ];

        for (let i = 0; i < 100; i++) {
            ++happinessAfter;
        }

        if (happinessAhead < happinessAfter) {
            console.info(`
                ★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★
                ★                                                ★
                ★   🎉Another happy and satisfied customer!🎉   ★
                ★                                                ★
                ★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★⋰⋱★
            `);
        } else {
            console.error('🙃');
        }
    }
}

let client = new Client("John Doe");
client.happyClient();
