export default {
    state: {
        gold: 0,
        activities: []
    },
    increase: function(newGold) {
        this.state.gold = this.state.gold + newGold
    },
    addActivity: function(newActivity) {
        this.state.activities = [...this.state.activities, newActivity]
    },
    resetAll() {
        this.state.gold = 0,
        this.state.activities = [""]
    }
}