import classNames from 'classnames/bind';
import styles from './DetailComment.module.scss';
import Avatar from '~/components/Avatar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function DetailComment() {
    return (
        <div className={cx('detailComment')}>
            <div className={cx('avatarWrap')}>
                <Link to="">
                    <div className={cx('avatarWrapper')}>
                        <Avatar src="" fontSize="4.3px" />
                    </div>
                </Link>
            </div>
            <div className={cx('commentBody')}>
                <div className={cx('commentInner')}>
                    <div className={cx('commentWrapper')}>
                        <div className={cx('commentContent')}>
                            <div className={cx('commentContentHeading')}>
                                <Link to="">
                                    <span className={cx('commentAuthor')}>nguoi thanh hoa</span>
                                </Link>
                            </div>
                            <div className={cx('commentText')}>
                                <div className={cx('contentText')}>
                                    <p>toi mai yeu 36.</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('commentTime')}>
                            <div className={cx('createdAt')}>
                                <div className={cx('createdAtLeft')}>
                                    <button className={cx('iconWrapper')}>
                                        <span className={cx('likeComment')}>Thích</span>
                                    </button>
                                    ·<span className={cx('replyComment')}>Trả lời</span>
                                </div>
                                <div className={cx('createdAtRight')}>
                                    <span className={cx('createdAtDotRight')}> · </span>
                                    <span className={cx('time')}>một tháng trước</span>
                                    <span className={cx('moreBtnWrapper')}>
                                        <span className={cx('createdAtDotRight')}> · </span>
                                        <button className={cx('moreBtn')}>
                                            <FontAwesomeIcon icon={faEllipsis} />
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailComment;
