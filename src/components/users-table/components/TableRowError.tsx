export const TableRowError = ({
  message,
  colSpan,
}: {
  message: string;
  colSpan: number;
}) => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <div className='w-full flex items-center justify-center'>
          <div className='indicator w-[60%]'>
            <span className='indicator-item badge bg-[#ea2f2f] text-xl font-bold pb-1'>
              Error
            </span>
            <div className='bg-base-300 grid h-32 w-full place-items-center rounded-xl'>
              <h3 className='font-medium text-base'>{message}</h3>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
