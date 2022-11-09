import { Link } from "react-router-dom";

import styles from "./Panes.module.scss";
import { Text } from "preact-i18n";

import { Tip } from "@revoltchat/ui";

import AccountManagement from "../../../components/settings/account/AccountManagement";
import EditAccount from "../../../components/settings/account/EditAccount";
import MultiFactorAuthentication from "../../../components/settings/account/MultiFactorAuthentication";

export function Account() {
    return (
        <div className={styles.user}>
            <EditAccount />
            <hr />

            <MultiFactorAuthentication />
            <hr />

            <AccountManagement />
            <hr />
        </div>
    );
}
