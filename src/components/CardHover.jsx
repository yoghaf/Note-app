import * as HoverCard from "@radix-ui/react-hover-card";
import propTypes from "prop-types";
function CardHover({ email, name }) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a className="ImageTrigger" href="https://twitter.com/radix_ui" target="_blank" rel="noreferrer noopener">
          <img className="Image normal" src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png" alt="Radix UI" />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="HoverCardContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <img className="Image large" src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png" alt="Radix UI" />
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div>
                <div className="Text bold">{name}</div>
                <div className="Text faded">{email}</div>
              </div>
            </div>
          </div>
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
CardHover.propTypes = {
  email: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
export default CardHover;
