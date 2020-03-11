import {userInputSearch} from '../Stories/userInputSearch';
import {userSelectResultVideoAsset} from '../Stories/userSelectResultVideoAsset';

export async function userSearch(){
    await userInputSearch('Apollo');
    await userSelectResultVideoAsset();

}