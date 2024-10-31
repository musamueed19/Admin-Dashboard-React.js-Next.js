import Image from 'next/image'
import React from 'react'

export default function Transaction() {
  return (
    <div className="bg-[--bgSoft] p-4 rounded-md">
      <h2 className="mb-5 font-medium text-[--textSoft]">
        Lastest Transactions
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <td className="table-cell-p-2">Name</td>
            <td className="table-cell-p-2">Status</td>
            <td className="table-cell-p-2">Date</td>
            <td className="table-cell-p-2">Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="table-cell-p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                Jhon Doe
              </div>
            </td>
            <td className="table-cell-p-2">
              <span className="transaction-status pending">Pending</span>
            </td>
            <td className="table-cell-p-2">14-02-2024</td>
            <td className="table-cell-p-2">$3.20</td>
          </tr>
          <tr>
            <td className="table-cell-p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                Jhon Doe
              </div>
            </td>
            <td className="table-cell-p-2">
              <span className="transaction-status done">Done</span>
            </td>
            <td className="table-cell-p-2">14-02-2024</td>
            <td className="table-cell-p-2">$3.20</td>
          </tr>
          <tr>
            <td className="table-cell-p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                Jhon Doe
              </div>
            </td>
            <td className="table-cell-p-2">
              <span className="transaction-status cancelled">Cancelled</span>
            </td>
            <td className="table-cell-p-2">14-02-2024</td>
            <td className="table-cell-p-2">$3.20</td>
          </tr>
          <tr>
            <td className="table-cell-p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                Jhon Doe
              </div>
            </td>
            <td className="table-cell-p-2">
              <span className="transaction-status pending">Pending</span>
            </td>
            <td className="table-cell-p-2">14-02-2024</td>
            <td className="table-cell-p-2">$3.20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
