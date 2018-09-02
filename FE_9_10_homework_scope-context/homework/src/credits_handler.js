let lastCardEmitted = 1;
const UserCard = function (key) {

    let index = key;
    let Limit = 100;
    let balance = 100;
    let eventHistory = [];
    let commission = 0.005;


    function addHistory(x, y, z) {
        eventHistory.push({operationType: x, credits: y, operationTime: z});
        return eventHistory;
    }

    function changeBalance(value) {
        balance += value;
    }

    return {
        getIndex: function () {
            return index;
        },
        transferCredits: function (value, card) {
            if (balance >= value + value * commission && Limit >= value) {
                addHistory('Transfer Credits', value, new Date());
                card.putCredits(value);
                return balance - value - value*commission;
            } else if (balance < value + value * commission) {
                return 'Not enough money';
            } else {
                return 'Increase the Transaction Limit';
            }
        },
        setTransactionLimit: function (value) {
            addHistory('Changed Transaction Limit', value, new Date());
            Limit = value;
        },
        putCredits: function (value) {
            addHistory('replenishment', value, new Date());
            changeBalance(value);
        },
        takeCredits: function (value) {
            if (balance >= value) {
                addHistory('Withdrawal of credits', value, new Date());
                changeBalance(-value);
            } else {
                return 'Not enough money';
            }
        },
        getCardOptions: function () {
            let options = [];
            options.push({Balance: balance, TransactionLimit: Limit, HistoryLogs: eventHistory, Index: index});
            return options;
        }
    }
};


const UserAccount = function (name) {
    this.name = name;
    let cards = [];
    return {
        addCard: function () {
            cards.push(new UserCard(lastCardEmitted));
            lastCardEmitted++;
        },
        getCardByKey: function (key) {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].getIndex() === key) {
                    return cards[i];
                }
            }
        }
    }
};


