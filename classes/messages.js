class Messages{
    constructor(messageID, userID, timestamp, likes){
        this.messageID = messageID;
        this.userID = userID;
        this.timestamp = timestamp;
        this.likes = likes;
    }
}

module.exports = Messages;