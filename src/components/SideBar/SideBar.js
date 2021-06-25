import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import {
  RiInboxFill,
  RiStarFill,
  RiSendPlane2Fill,
  RiDraftFill,
  RiDeleteBack2Fill,
  RiFolder2Fill,
} from "react-icons/ri";
import NavItem from "../NavItem/NavItem";
import Avatar from "../Avatar/Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 24px 24px 32px;
  background: #0f0d15;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 132%;
  color: white;
  margin-bottom: 24px;
  margin-top: 0;
`;

const NavSection = styled.ul`
  margin-top: 24px;
  width: 100%;
  padding: 0;
  padding-bottom: 24px;
  border-bottom: 2px dashed #4a4754;
`;

const TagIcon = styled.div`
  width: 12px;
  height: 12px;
  background: #0f0d15;
  border: 3px solid ${({ color }) => color};
  box-sizing: border-box;
  border-radius: 99px;
`;

const NavHeader = styled.p`
  text-align: left;
  font-size: 12px;
  color: #8e8c94;
  margin-bottom: 20px;
  margin-top: -16px;
`;

const UserContainer = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 12px;

  p {
    margin: 0;
  }
  p:first-child {
    font-size: 1em;
    color: white;
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: 0.8em;
    color: #8e8c94;
    font-weight: normal;
  }
`;

const SideBar = () => {
  return (
    <Wrapper>
      <Heading>Mailboxes</Heading>
      <Button />
      <NavSection>
        <NavItem leftIcon={<RiInboxFill />} rightIcon={"1024"}>
          Inbox
        </NavItem>
        <NavItem leftIcon={<RiStarFill />} rightIcon={"32"}>
          Starred
        </NavItem>
        <NavItem leftIcon={<RiSendPlane2Fill />} rightIcon={"182"}>
          Sent
        </NavItem>
        <NavItem leftIcon={<RiDraftFill />} rightIcon={"4"}>
          Draft
        </NavItem>
        <NavItem leftIcon={<RiDeleteBack2Fill />} rightIcon={"765"}>
          Trash
        </NavItem>
      </NavSection>
      <NavSection>
        <NavHeader>Tags</NavHeader>
        <NavItem leftIcon={<TagIcon color="#3363FF" />} rightIcon={"40"}>
          Behance
        </NavItem>
        <NavItem leftIcon={<TagIcon color="#FA0082" />} rightIcon={"23"}>
          Dribble
        </NavItem>
        <NavItem leftIcon={<TagIcon color="#1EE9B6" />} rightIcon={"98"}>
          Work
        </NavItem>
        <NavItem leftIcon={<TagIcon color="#FFDE54" />} rightIcon={"42"}>
          Social
        </NavItem>
      </NavSection>
      <NavSection>
        <NavHeader>Folders</NavHeader>
        <NavItem
          leftIcon={<RiFolder2Fill style={{ fill: "#FF6E01" }} />}
          rightIcon={"2"}
        >
          Behance
        </NavItem>
        <NavItem
          leftIcon={<RiFolder2Fill style={{ fill: "#D96FF8" }} />}
          rightIcon={"4"}
        >
          Dribble
        </NavItem>
        <NavItem
          leftIcon={<RiFolder2Fill style={{ fill: "#003CFF" }} />}
          rightIcon={"9"}
        >
          Work
        </NavItem>
      </NavSection>

      <UserContainer>
        <Avatar
          size="md"
          active={true}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu9ntDoWp_o9rkFbfBONKAyC-9CmwHHonpcxJDGaRw=s83-c-mo"
        />
        <UserDetails>
          <p>Rafael Chua</p>
          <p>raffy.chua12@gmail.com</p>
        </UserDetails>
      </UserContainer>
      <p
        style={{
          fontSize: "0.8em",
          color: "white",
          marginBottom: 16,
          fontWeight: "bold",
        }}
      >
        Messages
      </p>
      <UserContainer style={{ marginTop: 0, marginBottom: 16 }}>
        <Avatar
          size="sm"
          active={true}
          src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
        />
        <UserDetails>
          <p>Dianne Russel</p>
          <p>woohoooo</p>
        </UserDetails>
      </UserContainer>
      <UserContainer style={{ marginTop: 0, marginBottom: 16 }}>
        <Avatar
          size="sm"
          active={true}
          src="https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium"
        />
        <UserDetails>
          <p>Theresa Webb</p>
          <p>omg, this is amazing...</p>
        </UserDetails>
      </UserContainer>
      <UserContainer style={{ marginTop: 0, marginBottom: 0 }}>
        <Avatar
          size="sm"
          active={false}
          src="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?size=626&ext=jpg"
        />
        <UserDetails>
          <p>Cody Fisher</p>
          <p>haha oh man..</p>
        </UserDetails>
      </UserContainer>
    </Wrapper>
  );
};

export default SideBar;
