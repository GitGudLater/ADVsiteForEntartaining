import { FC } from "react";

export interface ButtonProps {
    localizationContent: string;
}

export const ButtonLight: FC<ButtonProps> = ({localizationContent}) => {
    return(
        <div>
            Button-light component
        </div>
    );
}