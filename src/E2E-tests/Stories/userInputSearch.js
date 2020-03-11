import Homepage from "../Pages/Homepage";

export async function userInputSearch(text){
    await Homepage.inputTextSearch(text);
    await Homepage.inputSearchBtnClick();
}