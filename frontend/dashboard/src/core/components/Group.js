import formatString from "@/core/utils/formatStrings";
import Category from "@/core/components/Category";
import { base } from "./group.module.scss";

export default function Group({ groupName, groupContent, library }) {
    return (
        <li className={base}>
            <h2>{formatString(groupName)}</h2>
            <ul>
                {Object.entries(groupContent).map(([categoryName, categoryContent], index) => (
                    <Category
                        key={index}
                        categoryName={categoryName}
                        categoryContent={categoryContent}
                        groupName={groupName}
                        library={library}
                    />
                ))}
            </ul>
        </li>
    );
}
