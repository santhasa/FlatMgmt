<?php
	session_start();
	header("Access-Control-Allow-Origin:*");
	//echo $_SESSION['memberid'];
	require 'vicinity_db_connection.php';
	$sql='select member_first_name, member_last_name from member where member_id="'.$_SESSION['memberid'].'"';
	//echo $sql;
	$stmt0 =$db0->query($sql);
	$count=0;
	while($row0 = $stmt0->fetch(PDO::FETCH_ASSOC)) {
		$count++;
		$member_first_name = "{$row0['member_first_name']}";
		$member_last_name="{$row0['member_last_name']}";
	}

	header("Access-Control-Allow-Origin:*");
	               echo '<li>';
                        echo '<div class="user-section">';
                            echo '<div class="user-section-inner">';
                            echo '<img src="assets/img/user.jpg" alt="">';
                            echo '</div>';
                            echo '<div class="user-info">';
                            	echo '<div> <h4>'.$member_first_name.'</h4></div>';
	                            echo '<div class="user-text-online">';
                                    echo '<span class="user-circle-online btn btn-success btn-circle "></span>Online';
                                echo '</div>';
                           echo '</div>';
    	                echo '</div>';
                   echo '</li>';
                   echo '<li class="sidebar-search">';
                        echo '<div class="input-group custom-search-form">';
                            echo '<input type="text" class="form-control" placeholder="Search...">';
                            echo '<span class="input-group-btn">';
                                echo '<button class="btn btn-default" type="button">';
                                    echo '<i class="fa fa-search"></i>';
                                echo '</button>';
                            echo '</span>';
                        echo '</div>';
        	       echo '</li>';
                   echo '<li class="selected">';
                       echo '<a href="dashboard.php"><i class="fa fa-dashboard fa-fw"></i>Dashboard</a>';
                   echo '</li>';
                   echo '<li>';
                        echo '<a href="#"><i class="fa fa-home fa-fw"></i>My Vicinity<span class="fa arrow"></span></a>';
                        echo '<ul class=\"nav nav-second-level\">';
							echo '<li>';
                                echo '<a href="family.php">My Family Members</a>';
                            echo '</li>';
							echo '<li>';
                                echo '<a href="panels-wells.html">My Contact Details</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="panels-wells.html">My Neighbours</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="notifications.html">My Personal Assets</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="notifications.html">Advertisements</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="notifications.html">Invitation</a>';
                            echo '</li>';
                        echo '</ul>';
                    echo '</li>';
                     echo '<li>';
                        echo '<a href="#"><i class="fa fa-rss fa-fw"></i>Communication<span class="fa arrow"></span></a>';
                        echo '<ul class=\"nav nav-second-level\">';
                            echo '<li>';
                                echo '<a href="buttons.html">Notice Board</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="notifications.html">Complaints</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="buttons.html">Discussion Board</a>';
                            echo '</li>';
                        echo '</ul>';
                    echo '</li>';
                    echo '<li>';
                        echo '<a href="#"><i class="fa fa-sitemap fa-fw"></i>Management<span class="fa arrow"></span></a>';
                        echo '<ul class=\"nav nav-second-level\">';
                            echo '<li>';
                                echo '<a href="#">Accounts</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">AMC</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Human Resources</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Meetings</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Broadcast Messages</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Compliance</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Checklists</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Polls</a>';
                            echo '</li>';
                        echo '</ul>';
                    echo '</li>';
                    echo '<li>';
                        echo '<a href="#"><i class="fa fa-wrench fa-fw"></i>Configuration<span class="fa arrow"></span></a>';
                        echo '<ul class=\"nav nav-second-level\">';
                            echo '<li>';
                                echo '<a href="#">Add Flats</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Configure Roles</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Add Members</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Monthly Maintenance Amount</a>';
                            echo '</li>';
                            echo '<li>';
                                echo '<a href="#">Emergency Information</a>';
                            echo '</li>';
                        echo '</ul>';
                    echo '</li>';
?>            
