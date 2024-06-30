/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './TextEditor.module.scss';
import MDEditor, { PreviewType } from '@uiw/react-md-editor'; // Import PreviewType từ thư viện

const cx = classNames.bind(styles);
function TextEditor({
    value,
    handleChange,
    height,
    preview,
    placeholder,
}: {
    value: string | undefined;
    handleChange: any;
    height: string;
    preview: PreviewType | undefined; // Sử dụng PreviewType cho prop preview
    placeholder: string;
}) {
    return (
        <div className={cx('wrapper')}>
            <MDEditor
                value={value || ''} // Tránh giá trị undefined
                height={height}
                // minHeight={50}
                preview={preview}
                visibleDragbar={false}
                onChange={handleChange} // Sử dụng hàm callback handleChange
                textareaProps={{
                    placeholder: placeholder,
                }}
            />
        </div>
    );
}

export default TextEditor;
