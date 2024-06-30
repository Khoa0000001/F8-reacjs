import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import VerticalModal from '../VerticalModal';
// import { useDispatch } from 'react-redux';
// import { updateShowVerticalModalValue } from '~/store/slice';
import Avatar from '~/components/Avatar';
import DetailComment from '~/components/DetailComment';
import TextEditor from '~/components/TextEditor';

const cx = classNames.bind(styles);
interface ShowVerticalModal {
    info: string;
    status: boolean;
}

function Comment({ info }: { info: ShowVerticalModal }) {
    // const dispath = useDispatch();
    // useEffect(() => {
    //     dispath(updateShowVerticalModalValue(info));
    // }, []);
    const [showTextEditor, setShowTextEditor] = useState(false);
    const handleShowTextEditor = () => {
        setShowTextEditor(true);
    };
    const handleClosingTextEditor = () => {
        setValueComment('');
        setShowTextEditor(false);
    };

    const [valueComment, setValueComment] = useState<string | undefined>(''); // Khởi tạo giá trị là string hoặc undefined
    const handleChange = (newValueComment: string | undefined) => {
        setValueComment(newValueComment || ''); // Tránh giá trị undefined
    };

    return (
        <VerticalModal
            children={
                <div className={cx('wrapper')}>
                    <div className={cx('contentHeading')}>
                        <div>
                            <h4>39 hỏi đáp</h4>
                            <p className={cx('help')}>(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)</p>
                        </div>
                    </div>
                    <div className={cx('commentWrapper')}>
                        <div className={cx('avatarWrapper')}>
                            <Avatar src="" fontSize="4.2px" />
                        </div>
                        <div className={cx('commentContent')}>
                            {showTextEditor ? (
                                <>
                                    <TextEditor
                                        value={valueComment}
                                        handleChange={handleChange}
                                        height="280px"
                                        preview="edit"
                                        placeholder="Bạn có thức mắc gì?"
                                    />
                                    <div className={cx('actionWrapper')}>
                                        <button className={cx('cancel')} onClick={handleClosingTextEditor}>
                                            Hủy
                                        </button>
                                        <button className={cx('ok', { active: valueComment })}>Bình luận</button>
                                    </div>
                                </>
                            ) : (
                                <div className={cx('placeholder')} onClick={handleShowTextEditor}>
                                    <span>Bạn có thắc mắc gì trong bài học này?</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <DetailComment />
                    <DetailComment />
                    <DetailComment />
                    <DetailComment />
                    <DetailComment />
                </div>
            }
            data={info}
        />
    );
}

export default Comment;
