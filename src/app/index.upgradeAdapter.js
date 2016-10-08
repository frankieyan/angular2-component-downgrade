import {UpgradeAdapter} from "@angular/upgrade";
import Angular2Module from "./index.ng2.module";

const upgradeAdapter = new UpgradeAdapter(Angular2Module);
export default upgradeAdapter;
