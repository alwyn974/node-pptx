let { Presentation } = require('./presentation');

class Composer {
    constructor() {
        this.presentation = new Presentation();
    }

    getSlide(slideNameOrNumber) {
        return this.presentation.getSlide(slideNameOrNumber);
    }

    async load(filePath) {
        this.presentation.templateFilePath = filePath;

        await this.presentation.loadExistingPPTX();
        return this;
    }

    async loadFromBuffer(buffer) {
        await this.presentation.loadFromBuffer(buffer);
        return this;
    }

    async compose(func) {
        await func(this.presentation);
        return this;
    }

    async save(destination) {
        await this.presentation.save(destination);
        return this;
    }

    async toBuffer() {
        return await this.presentation.createZipBuffer();
    }
}

module.exports.Composer = Composer;
