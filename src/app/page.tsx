import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import { comments } from "@/libs/comments";
import { CommentProps } from "@/libs/types";
import Reply from "@/components/Reply";

export default function Home() {
  const comment = comments;
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner name="จิรเดช อรทัย" id= "640610287" />

        {/* Comment Example */}
        <Comment ImagePath ="/profileImages/lisa.jpg" username="Lisa" commentTitle="จริงค่า" likes={999} replies=""/>

        {/* Reply Example */}
        <Reply ImagePath="/profileImages/puppy.jpg" username="หมาน้อย" replyTitle="จริงค้าบบบบบบบบ" likes= {2} />

        {/* {comment.map((comment : CommentProps) => (
          <Comment 
            ImagePath={comment.userImagePath}
            username={comment.username}
            commentTitle={comment.commentTitle}
            likes={comment.likeNum}
            replies={comment.replyText}
          />
        ))} */}
      </div>
    </div>
  );
}
