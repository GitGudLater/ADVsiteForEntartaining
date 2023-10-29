import { FC } from "react";

export interface ButtonProps {
    localizationContent: string;
}

export const ButtonDark: FC<ButtonProps> = ({localizationContent}) => {
    return(
        <div>
            Button-dark component
        </div>
    );
}