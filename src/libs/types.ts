// You can define interfaces for all React components here.
// Do not forget to export properly.
interface PostOwnerProps {
    name : string;
    id : string;
}
export type { PostOwnerProps };

interface CommentProps {
    ImagePath : string;
    username : string;
    commentTitle : string;
    likes : number;
    replies : ReplyProps[];
}
export type { CommentProps };

interface ReplyProps {
    ImagePath : string;
    username : string;
    replyTitle : string;
    likes : number;
}
export type { ReplyProps };
