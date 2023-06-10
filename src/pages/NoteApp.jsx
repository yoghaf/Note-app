import * as Avatar from "@radix-ui/react-avatar";
import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import propTypes from "prop-types";

function NoteApp() {
  return (
    <div style={{ display: "flex", gap: 20 }} className="  items-center p-10 flex-col">
      <div className="flex gap-5">
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image className="AvatarImage" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" alt="Colm Tuite" />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image className="AvatarImage" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" alt="Pedro Duarte" />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            JD
          </Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Pedro Duarte"
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            JD
          </Avatar.Fallback>
        </Avatar.Root>
      </div>

      <div>
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>What is Note App?</AccordionTrigger>
            <AccordionContent>Note app: Your digital companion for organizing ideas, tasks, and important information effortlessly. Stay organized, stay productive.</AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>What are the key benefits of using a note-app?</AccordionTrigger>
            <AccordionContent>
              A note app serves as a digital platform to capture and organize personal information, providing easy accessibility and efficient management of notes for improved productivity and organization.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>Is it free?</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">Yes! You can use it as you want.</div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger className={classNames("AccordionTrigger", className)} {...props} ref={forwardedRef}>
      {children}
      <div>x</div>
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(function AccordionContent({ children, className, ...props }, forwardedRef) {
  return (
    <Accordion.Content className={classNames("AccordionContent", className)} {...props} ref={forwardedRef}>
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  );
});
AccordionContent.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};

AccordionContent.displayName = "AccordionContent";

export default NoteApp;
