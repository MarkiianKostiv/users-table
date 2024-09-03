export const TableRowEmpty = ({ colSpan }: { colSpan: number }) => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <div className='w-full flex items-center justify-center'>
          <div className='indicator w-[60%]'>
            <span className='indicator-item badge text-[#000] bg-[#ebe539] text-xl font-bold pb-4 pt-3'>
              Empty
            </span>
            <div className='bg-base-300 grid h-32 w-full place-items-center rounded-xl'>
              <h3 className='font-medium text-base'>
                No users were found for the relevant parameters
              </h3>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
