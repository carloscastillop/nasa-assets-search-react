import {Selector, t} from 'testcafe';

class Homepage {
    constructor() {
        this.inputSearch = Selector('#searchInput');
        this.inputSearchBtn = Selector('form button');
        this.resultTypeVideo = Selector('a[data-test-type=video]')
    }

    async inputTextSearch(text) {
        const inputSearch = this.inputSearch;
        await t
            .expect(inputSearch).ok()

        await t
            .typeText(inputSearch, text, {replace: true});
    }

    async inputSearchBtnClick() {
        const inputSearchBtn = this.inputSearchBtn;
        await t
            .expect(inputSearchBtn).ok()

        await t
            .click(inputSearchBtn);
    }

    async userSelectAssetVideo(order = 0) {
        const resultTypeVideo = await this.resultTypeVideo;
        const count = await resultTypeVideo.count;
        console.log({videos:count})
        if(count > 0){
            await t.click(resultTypeVideo.nth(order));
        }
    }

}

export default new Homepage();